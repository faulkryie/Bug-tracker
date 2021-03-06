const express = require('express')
const AcessControl = require('accesscontrol')
const { Employee, Project } = require('../db/models')
const { asyncHandler, handleValidationErrors } = require('./utils')
const { requireAuth, getUserToken } = require('../auth')
const { check } = require('express-validator')


const validateProjectNameAndDescription = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name."),
    check("description")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description"),
    handleValidationErrors,
];

//mapping roles based off roleId in db
//1 = admin
//2 = projectManager
//3 = dev
//4 = submitter
let grantsObject = {
    1: {
        tickets: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        projects: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        employees: {
            'update:any': ['roleId'],
            'read:any': ['*']
        }
    },
    2: {
        tickets: {
            'read:any': ['*'],
            'update:any': ['severityLevel', 'status'],
        },
        projects: {
            'read:any': ['*'],
            'delete:any': ['*'],
            'update:own': ['employeeId'],
        },
        employees: {
            'read:any': ['*']
        }
    },
    3: {
        tickets: {
            'read:own': ['*'],
            'update:own': ['comments', 'status']
        },
        projects: {
            'read:own': ['*'],
        }
    },
    4: {
        tickets: {
            'read:any': ['*'],
            'create:any': ['*']
        },
        projects: {
            'read:any': ['*'],
        }
    }
};

const projectNotFoundError = (id) => {
    const err = new Error(`project not found`)
    err.errors = [`project with id ${id} does not exist`]
    err.title = 'project not found'
    err.status = 404
    return err
}

//create new ac instance and set grants for roles
const ac = new AcessControl(grantsObject)

const router = express.Router()

//get all projects in db based on role
router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    //req.user.role is set in the requireAuth middleware
    const role = req.user.role
    if (role) {
        //admin role or submitter role which returns a boolean if permission granted
        const permissionAdminSubmitter = ac.can(`${role}`).readAny('projects')

        //get all projects if admin role
        let projects;
        if (permissionAdminSubmitter.granted) {
            projects = await Project.findAll({
                include: [Employee]
            })

            //only get projects assigned to (dev, projectManager)
        } else {
            projects = await Project.findAll({
                include: {
                    model: Employee,
                    where: {
                        id: req.user.id
                    }
                },
            })
        }
        if (projects) {
            res.status(200)
            res.json({ projects })
        } else {
            res.status(404).send('resource not found')
        }
    } else {
        //build functionality for if role is not defined (new user)
        const err = new Error('permission denied')
        err.title = 'permission denied'
        err.status = 401
        err.errors = ['role not assigned']
        next(err)
    }

}))

// create project (admin role)
router.post('/',
    validateProjectNameAndDescription,
    requireAuth,
    asyncHandler(async (req, res, next) => {

        const role = req.user.role
        const permissionAdmin = ac.can(`${role}`).createAny('projects')

        //grab employee id's from employeeIdArray sent to associate employee with project created
        const { name, description, employeeIdArray } = req.body
        let project;
        if (permissionAdmin.granted) {
            project = await Project.create({ name, description })

            //map over array to add association for each employee
            employeeIdArray.map(async id => {
                //find employee in db
                const employee = await Employee.findByPk(id)
                //add association to project
                project.addEmployee(employee)
            })

            res.status(201)
            res.json({ project })

        } else {
            const err = new Error('permission denied')
            err.title = 'permission denied'
            err.status = 401
            err.errors = ['role not permitted to create resource']
            next(err)
        }


    }))

//edit project admin role only
router.put('/:projectId',
    validateProjectNameAndDescription,
    requireAuth,
    asyncHandler(async (req, res, next) => {

        try {
            const projectId = parseInt(req.params.projectId)

            const role = req.user.role
            const permissionAdmin = ac.can(`${role}`).updateAny('projects')

            //grab employee id's from employeeIdArray sent to associate employee with project created
            const { name, description, employeeIdArray } = req.body

            //find project in db to update
            let project = await Project.findOne({
                where: {
                    id: projectId
                },
                include: [Employee]
            });
            if (permissionAdmin.granted) {
                if (!employeeIdArray) {
                    //update proj in db
                    await project.update({ name, description })

                } else {

                    //not updating project id because ticket is created for one specific proj
                    await project.update({ name, description })

                    //map over array to add association for each employee
                    employeeIdArray.map(async id => {
                        //find employee in db
                        const employee = await Employee.findByPk(id)
                        //update association
                        await project.addEmployee(employee)
                    })
                }

                res.status(201)
                res.json({ project })

            } else {
                const err = new Error('permission denied')
                err.title = 'permission denied'
                err.status = 401
                err.errors = ['role not permitted to create resource']
                next(err)
            }
        } catch (e) {

        }




    }))

//delete project in db (admin only)
router.delete('/:projectId', requireAuth, asyncHandler(async (req, res, next) => {
    //employeeId will be sent when the admin clicks on the user to update the role with
    const projectId = parseInt(req.params.projectId, 10)
    //grabbing role from req to verify permissions (admin/project manager)
    const role = req.user.role

    //admin returns a boolean if permission granted
    const permissionAdmin = ac.can(`${role}`).deleteAny('projects')

    if (permissionAdmin.granted || permissionProjectManager.granted) {
        //find project in db to destroy
        const project = await Project.findByPk(projectId)

        //if project exist destroy it otherwise throw a not found error
        if (project) {
            await project.destroy()
            res.json({ message: `Deleted project with id of ${projectId}` })
        } else {
            next(projectNotFoundError(projectId))
        }
    } else {
        res.status(401)
        const err = new Error('permission denied')
        err.title = 'permission denied'
        err.status = 401
        err.errors = ['role not permitted to delete resource']
        next(err)
    }

}))

//export grant objects for permissions to be accessed in other routes
module.exports = {
    projectsRouter: router,
    grantsObject,
    ac
}