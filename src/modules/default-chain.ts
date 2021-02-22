const defaultChainfile = {
  chain: {

  },
  version: 'blank',
  createdAt: new Date(),
  updatedAt: new Date()
}

/**
 * Creates the default chain file if there isn't a file containing the chainfile format
 * It has parameters to fill in the blanks (yes, they are called blank.) of the chainfile.
 * @param version the chainson version
 */
function createChainfile(version: string) {
  defaultChainfile.version = version
  return JSON.stringify(defaultChainfile)
}

export { createChainfile }

