import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../exceptions/api.error'
import tokenService from '../services/token.service'

export default function (req: Request, res: Response, next: NextFunction) {
    try {
        const accessToken = req.headers.authorization.split(' ')[1]
        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req['user'] = userData
        next()
    } catch (err) {
        return next(ApiError.UnauthorizedError())
    }
}