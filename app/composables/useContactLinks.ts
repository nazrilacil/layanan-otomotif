import { business, emergencyPhone, primaryPhone } from '~/config/business'
import { telHref } from '~/utils/phone'
import { waHref } from '~/utils/whatsapp'

export function useContactLinks() {
  const primaryTel = telHref(primaryPhone.display)
  const emergencyTel = telHref(emergencyPhone.display)
  const waUrl = waHref(business.whatsapp.number, business.whatsapp.message)

  return {
    primaryPhone,
    emergencyPhone,
    primaryTel,
    emergencyTel,
    waUrl,
    business,
  }
}
