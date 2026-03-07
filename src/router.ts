// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/contact-us`
  | `/dii`
  | `/eooc`
  | `/main`
  | `/main/strategic-aquisitions/:slug`
  | `/request-a-quote`
  | `/t3cktrading`
  | `/tca-cbs`
  | `/tg-ent`
  | `/tggt-opc`

export type Params = {
  '/main/strategic-aquisitions/:slug': { slug: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
