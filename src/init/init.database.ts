import { sequelize } from '../modules/models.js'

export default () => {
  sequelize.sync();
}