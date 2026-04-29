// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/contact-us`
  | `/dii`
  | `/eeoc`
  | `/main`
  | `/main/field-operations/:slug`
  | `/main/strategic-aquisitions/:slug`
  | `/procurement-summary`
  | `/request-a-quote`
  | `/t3cktrading`
  | `/tca-cbs`
  | `/tca-cbs/services/:slug`
  | `/tg-ent`
  | `/tggt-opc`
  | `/tggt-opc/:domain/:slug`

export type Params = {
  '/main/field-operations/:slug': { slug: string }
  '/main/strategic-aquisitions/:slug': { slug: string }
  '/tca-cbs/services/:slug': { slug: string }
  '/tggt-opc/:domain/:slug': { domain: string; slug: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
