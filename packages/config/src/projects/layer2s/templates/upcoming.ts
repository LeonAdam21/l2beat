import { ProjectId, UnixTime } from '@l2beat/shared-pure'

import { CONTRACTS, TECHNOLOGY, UPCOMING_RISK_VIEW } from '../../../common'
import { BadgeId } from '../../badges'
import { type Layer3, type Layer3Display } from '../../layer3s'
import { type Layer2, type Layer2Display } from '../types'

export interface UpcomingConfigL2 {
  id: string
  createdAt: UnixTime
  display: Omit<Layer2Display, 'dataAvailabilityMode'>
  badges?: BadgeId[]
}

export interface UpcomingConfigL3 {
  id: string
  createdAt: UnixTime
  display: Omit<Layer3Display, 'dataAvailabilityMode'>
  hostChain: Layer3['hostChain']
  badges?: BadgeId[]
}

export function upcomingL2(templateVars: UpcomingConfigL2): Layer2 {
  return {
    isUpcoming: true,
    type: 'layer2',
    id: ProjectId(templateVars.id),
    createdAt: templateVars.createdAt,
    display: {
      ...templateVars.display,
    },
    stage: {
      stage: 'NotApplicable',
    },
    config: {
      escrows: [],
    },
    riskView: UPCOMING_RISK_VIEW,
    technology: TECHNOLOGY.UPCOMING,
    contracts: CONTRACTS.EMPTY,
    badges: templateVars.badges,
  }
}

export function upcomingL3(templateVars: UpcomingConfigL3): Layer3 {
  return {
    isUpcoming: true,
    type: 'layer3',
    id: ProjectId(templateVars.id),
    createdAt: templateVars.createdAt,
    display: {
      ...templateVars.display,
    },
    hostChain: templateVars.hostChain,
    config: {
      escrows: [],
    },
    riskView: UPCOMING_RISK_VIEW,
    stackedRiskView: UPCOMING_RISK_VIEW,
    technology: TECHNOLOGY.UPCOMING,
    contracts: CONTRACTS.EMPTY,
    badges: templateVars.badges,
  }
}
