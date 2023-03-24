import { sequelize } from '../helpers/database/models.js'

export default () => {
  sequelize.sync();
}