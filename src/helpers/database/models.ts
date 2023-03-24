import { DataTypes, Sequelize, TableHints } from "sequelize"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./../env.js"
import { id, tableDefaultConfigs } from "./default.table.configs.js";


const { STRING, BOOLEAN, TEXT, INTEGER } = DataTypes

export const sequelize = new Sequelize({
  host: DB_HOST || 'localhost',
  username: DB_USER || "root",
  database: DB_NAME || "database",
  password: DB_PASSWORD,
  dialect: "mysql",
  logging: false
});


const Quiz = sequelize.define('Quiz', {
  id,
  title:        { type: STRING,   allowNull: false},
  description:  { type: TEXT,     allowNull: true},
  isPublished:  { type: BOOLEAN,  allowNull: false, defaultValue: false }
}, tableDefaultConfigs);

const Question = sequelize.define('Question', {
  id,
  statement:        { type: STRING,   allowNull: false},
  isMandatory:      { type: BOOLEAN,  allowNull: false, defaultValue: false},
  correctAnswerId:  { type: INTEGER,  allowNull: false } // TODO:Add the relationship
}, tableDefaultConfigs);

const Answer = sequelize.define('Answer', {
  id,
  statement:        { type: STRING,   allowNull: false},
}, tableDefaultConfigs);

const Response = sequelize.define('Response', {
  id,
  isCorrect:    { type: BOOLEAN, allowNull: false, defaultValue: false}
}, tableDefaultConfigs);

const Assessment = sequelize.define('Assessment', {
  id
}, tableDefaultConfigs);

Question.belongsTo(Quiz, {
  foreignKey: {
    allowNull: false,
    name: 'quizId'
  }
})

Answer.belongsTo(Question, {
  foreignKey: {
    allowNull: false,
    name: 'questionId'
  }
})

Response.belongsTo(Answer, {
  foreignKey: {
    allowNull: false,
    name: 'answerId'
  }
})

Response.belongsTo(Question, {
  foreignKey: {
    allowNull: false,
    name: 'questionId'
  }
});

Response.belongsTo(Assessment, {
  foreignKey: {
    allowNull: false,
    name: 'assessmentId'
  }
})