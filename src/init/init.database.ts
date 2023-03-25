import { sequelize } from '../helpers/database/models.js'
import { NODE_ENV } from '../helpers/env.js';

let configs = {
  force: false
}
if(NODE_ENV==='local'){
  configs.force = true
}
export default () => {
  sequelize.sync({force:true});
}