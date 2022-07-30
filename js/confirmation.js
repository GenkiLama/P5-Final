import { getCurrentId } from './DAL/data.js'
import { clientOrderId } from './UTILS/getElement.js'

clientOrderId.innerText = getCurrentId()