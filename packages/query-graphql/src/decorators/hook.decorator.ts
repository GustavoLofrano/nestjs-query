import { Class, DeepPartial, getClassMetadata, classMetadataDecorator, MetaValue } from '@nestjs-query/core';
import {
  CreateManyInputType,
  CreateOneInputType,
  DeleteManyInputType,
  DeleteOneInputType,
  UpdateManyInputType,
  UpdateOneInputType,
} from '../types';
import {
  BEFORE_CREATE_MANY_KEY,
  BEFORE_CREATE_ONE_KEY,
  BEFORE_DELETE_MANY_KEY,
  BEFORE_DELETE_ONE_KEY,
  BEFORE_UPDATE_MANY_KEY,
  BEFORE_UPDATE_ONE_KEY,
} from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HookFunc<T, Context = any> = (instance: T, context: Context) => T | Promise<T>;

export type CreateOneHook<DTO> = HookFunc<CreateOneInputType<DTO>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BeforeCreateOne = classMetadataDecorator<CreateOneHook<any>>(BEFORE_CREATE_ONE_KEY);
export function getCreateOneHook<DTO>(DTOClass: Class<DTO>): MetaValue<CreateOneHook<DTO>> {
  return getClassMetadata(DTOClass, BEFORE_CREATE_ONE_KEY);
}

export type CreateManyHook<DTO> = HookFunc<CreateManyInputType<DTO>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BeforeCreateMany = classMetadataDecorator<CreateManyHook<any>>(BEFORE_CREATE_MANY_KEY);
export function getCreateManyHook<DTO>(DTOClass: Class<DTO>): MetaValue<CreateManyHook<DTO>> {
  return getClassMetadata(DTOClass, BEFORE_CREATE_MANY_KEY);
}

export type UpdateOneHook<DTO> = HookFunc<UpdateOneInputType<DTO>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BeforeUpdateOne = classMetadataDecorator<UpdateOneHook<any>>(BEFORE_UPDATE_ONE_KEY);
export function getUpdateOneHook<DTO, U extends DeepPartial<DTO>>(DTOClass: Class<DTO>): MetaValue<UpdateOneHook<U>> {
  return getClassMetadata(DTOClass, BEFORE_UPDATE_ONE_KEY);
}

export type UpdateManyHook<DTO, U extends DeepPartial<DTO>> = HookFunc<UpdateManyInputType<DTO, U>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BeforeUpdateMany = classMetadataDecorator<UpdateManyHook<any, any>>(BEFORE_UPDATE_MANY_KEY);
export function getUpdateManyHook<DTO, U extends DeepPartial<DTO>>(
  DTOClass: Class<DTO>,
): MetaValue<UpdateManyHook<DTO, U>> {
  return getClassMetadata(DTOClass, BEFORE_UPDATE_MANY_KEY);
}

export type DeleteOneHook = HookFunc<DeleteOneInputType>;
export const BeforeDeleteOne = classMetadataDecorator<DeleteOneHook>(BEFORE_DELETE_ONE_KEY);
export function getDeleteOneHook<DTO>(DTOClass: Class<DTO>): MetaValue<DeleteOneHook> {
  return getClassMetadata(DTOClass, BEFORE_DELETE_ONE_KEY);
}

export type DeleteManyHook<DTO> = HookFunc<DeleteManyInputType<DTO>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BeforeDeleteMany = classMetadataDecorator<DeleteManyHook<any>>(BEFORE_DELETE_MANY_KEY);
export function getDeleteManyHook<DTO>(DTOClass: Class<DTO>): MetaValue<DeleteManyHook<DTO>> {
  return getClassMetadata(DTOClass, BEFORE_DELETE_MANY_KEY);
}
