/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express'
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../../lexicons'
import { isObj, hasProp } from '../../../../util'
import { CID } from 'multiformats/cid'
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server'
import * as AppBskyActorDefs from '../actor/defs'
import * as AppBskyGraphDefs from './defs'

export interface QueryParams {
  actor: string
  includeUnaccepted: boolean
  limit: number
  cursor?: string
}

export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  vouches: ActorVouch[]
  [k: string]: unknown
}

export type HandlerInput = undefined

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess | HandlerPipeThrough
export type HandlerReqCtx<HA extends HandlerAuth = never> = {
  auth: HA
  params: QueryParams
  input: HandlerInput
  req: express.Request
  res: express.Response
}
export type Handler<HA extends HandlerAuth = never> = (
  ctx: HandlerReqCtx<HA>,
) => Promise<HandlerOutput> | HandlerOutput

export interface ActorVouch {
  actor: AppBskyActorDefs.ProfileViewBasic
  vouch: AppBskyGraphDefs.VouchView
  [k: string]: unknown
}

export function isActorVouch(v: unknown): v is ActorVouch {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'app.bsky.graph.getVouchesGiven#actorVouch'
  )
}

export function validateActorVouch(v: unknown): ValidationResult {
  return lexicons.validate('app.bsky.graph.getVouchesGiven#actorVouch', v)
}
