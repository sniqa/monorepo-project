import { ObjectId } from 'mongodb';
import MongoDb from '../../mongodb';
import { hasKeys } from './../../common/object';
import { verifyToken } from './../user/token';
import { DENIED, EMPTY, falseRes, MISSING_PARAMS, REPEAT, trueRes, UNKOWN_ERROR, USER_NOT_EXIST } from './../utils';

const IP_INFO = 'ipAddrs'

interface IP {
  _id: ObjectId
  account: string,
  ip: string,
  netTypeName: string,
  deviceType?: string
}

const IpAddrInfoModel = MongoDb.collection<IP>(IP_INFO)

interface AdministrorLogin {
  token: string
}

export const createIp = async (user: IP & AdministrorLogin) => {
  if (!hasKeys(user, 'token', 'account', 'ip', 'netTypeName')) {
    return falseRes(MISSING_PARAMS)
  }

  const { token, ...ip } = user

  const { account } =  verifyToken(token)

  if (account === 'admin') {
    const repeat = await IpAddrInfoModel.findOne(ip)

    if (repeat) {
      return falseRes(REPEAT)
    }

    const res = await IpAddrInfoModel.insertOne(ip)
    return res ? trueRes(res) : trueRes(UNKOWN_ERROR) 
  }
  else {
    return falseRes(DENIED)
  }
  
}

export const delIp = async (user: IP & AdministrorLogin) => {
  
  if (!hasKeys(user, 'token', '_id')) {
    return falseRes(MISSING_PARAMS)
  }

  
  const { token, ...ip } = user

  const { account } =  verifyToken(token)

  if (account === 'admin') {

    const res = await IpAddrInfoModel.findOneAndDelete({_id: new ObjectId(ip._id)})

    return res ? trueRes(res) : trueRes(UNKOWN_ERROR) 
  }
  else {
    return falseRes(DENIED)
  }
  
}

export const findIps = async (query: IP & AdministrorLogin) => {
  const ipInfos = await IpAddrInfoModel.find(query).toArray()
  return (ipInfos && ipInfos.length > 0) ? trueRes(ipInfos) : falseRes(EMPTY)
}

export const modifyIp = async (query: IP & AdministrorLogin) => {
if (!hasKeys(query, '_id')) {
    return falseRes(MISSING_PARAMS)
  }
  
  const { _id, ...rest } = query
  

  const res = await IpAddrInfoModel.findOneAndUpdate({ _id: new ObjectId(_id) }, {$set: {...rest}})
  

  return res ? trueRes(res) : falseRes(res)
}