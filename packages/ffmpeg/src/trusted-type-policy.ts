export const createTrustedTypePolicy = (flag: boolean | undefined) => {
  let policyOptions

  if ((typeof globalThis.trustedTypes !== 'object') || (typeof globalThis.trustedTypes.createPolicy !== 'function'))
    return

  if (flag === true) {
    const passthrough_policy = (string: string): string => string

    policyOptions = {
      createHTML:      passthrough_policy,
      createScript:    passthrough_policy,
      createScriptURL: passthrough_policy
    }
  }
  if (flag === false) {
    const disabled_policy = (string: string): string => ''

    policyOptions = {
      createHTML:      disabled_policy,
      createScript:    disabled_policy,
      createScriptURL: disabled_policy
    }
  }

  if (policyOptions) {
    globalThis.trustedTypes.createPolicy('default', policyOptions)
  }
}
