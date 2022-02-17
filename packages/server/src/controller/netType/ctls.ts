import { ObjectId } from 'mongodb';
import MongoDb from '../../mongodb';
import { hasKeys } from './../../common/object';
import { EMPTY, falseRes, MISSING_PARAMS, NET_TYPE_REPEAT, trueRes } from './../utils';

const NET_TYPE_COLLECTION_NAME = 'netTypes'

interface NetType {
  _id: ObjectId
  netTypeName: string
  ipRangeStart: string,
  ipRangeEnd: string
}

interface Token {
  token: string
}

const NetTypeModel = MongoDb.collection<NetType>(NET_TYPE_COLLECTION_NAME)

export const createNetType = async (type: Token & NetType) => {
  if (!hasKeys(type, 'token', 'netTypeName', 'ipRangeStart', 'ipRangeEnd')) {
    return falseRes(MISSING_PARAMS)
  }

  const { token, ...netType } = type

  // const { account } = verifyToken(token)



  const isRepeat = await NetTypeModel.findOne({ netTypeName: netType.netTypeName })
  
  if (isRepeat) {
    return falseRes(NET_TYPE_REPEAT)
  }

  const newType = await NetTypeModel.insertOne(netType)

  return trueRes(newType)

}


export const delNetType = async (type: NetType) => {
  if (!hasKeys(type, '_id')) {
    return falseRes(MISSING_PARAMS)
  }

  const res = await NetTypeModel.deleteOne({ _id: new ObjectId(type._id), })
  
  return res ? trueRes(res) : falseRes(res)

}


export const findNetTypes = async (type: NetType) => {
  const res = await NetTypeModel.find(type).toArray()
  return (res && res.length > 0) ? trueRes(res) : falseRes(EMPTY) 
}



export const modifyNetType = async (type: NetType) => {
  if (!hasKeys(type, '_id')) {
    return falseRes(MISSING_PARAMS)
  }
  
  const { _id, ...rest } = type
  

  const res = await NetTypeModel.findOneAndUpdate({ _id: new ObjectId(_id) }, {$set: {...rest}})
  

  return res ? trueRes(res) : falseRes(res)
}