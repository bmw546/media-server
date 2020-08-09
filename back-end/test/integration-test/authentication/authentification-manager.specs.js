const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const AuthenticationManager = require('module/authentification/manager/authentification-manager');
const authenticationManager = new AuthenticationManager();

const UserEntity = require('module/user/entities/user-entity');

const SessionEntity = require('module/authentification/entities/session-entity');

const UserDao = require('module/user/dao/user-dao');
const userDao = new UserDao();

let userTest = new UserEntity({
    username: 'test',
    password: 'pass'
});

describe('module/authentification/manager/authentification-manager : classicSignup()', () => {

    it('should add a user to the database', () => {

    });

    
});


describe('module/authentification/manager/authentification-manager : classicLogin()', () => {

    it('should login a user', async() => {
        // change the .createSession and expect to be the session
        await authenticationManager.classicLogin(userTest.username, userTest.password);
    });

    it('should reject wrong credential', () => {
        
    });

});

describe('module/authentification/manager/authentification-manager : createSession()', () => {
    it('should create a session', () => {
        
    });
});
