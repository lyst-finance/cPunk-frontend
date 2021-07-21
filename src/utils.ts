import BigNumber from 'bignumber.js'
import numeral from 'numeral'
import BN from 'bignumber.js'
import { isNil } from 'ramda'

type Formatter<T = string> = (amount?: string, symbol?: string) => T

export const times = (a?: BN.Value, b?: BN.Value): string =>
  new BN(a || 0).times(b || 0).toString()

  export const div = (a?: BN.Value, b?: BN.Value): string =>
  new BN(a || 0).div(b || 1).toString()

export const isFinite = (n?: BN.Value): boolean =>
  !isNil(n) && new BN(n).isFinite()

const rm = BigNumber.ROUND_DOWN

export const percent = (value?: string, dp: number = 2): string =>
  isFinite(value) ? toFixed(times(value, 100), dp) + "%" : ""

export const decimal = (value = '0') =>
  new BigNumber(value).decimalPlaces(6, rm).toString()

export const toFixed = (value = '0', dp = 2) =>
  new BigNumber(value).toFixed(dp, rm).toString()

export const lookup: Formatter = (amount = '0', symbol) => {
  const value = symbol
    ? new BigNumber(amount).div(1e6).dp(6, rm)
    : new BigNumber(amount).dp(2, rm).toString()
  return value.toString()
}

export const lookupSymbol = (symbol?: string) =>
  symbol?.startsWith('u')
    ? symbol.slice(1, 3).toUpperCase() + 'T'
    : symbol ?? ''

export const getIsBig: Formatter<boolean> = (amount, symbol) =>
  new BigNumber(lookup(amount, symbol)).gte(1e6)

export const format: Formatter = (amount, symbol) => {
  const value = new BigNumber(lookup(amount, symbol))
  const decimals = Array.from({ length: 2 }, () => '0').join('')
  const formatted = getIsBig(amount, symbol)
    ? numeral(value.div(1e4).integerValue(rm).times(1e4)).format('0,0.00a')
    : numeral(value).format('0,0.' + decimals)
  return formatted.toUpperCase()
}

export const formatAsset: Formatter = (amount, symbol) =>
  symbol ? `${format(amount, symbol)} ${lookupSymbol(symbol)}` : ''

export const convertHexToRGBA = (hex: string, opacity: number) => {
  const tempHex = hex.replace('#', '')
  const r = parseInt(tempHex.substring(0, 2), 16)
  const g = parseInt(tempHex.substring(2, 4), 16)
  const b = parseInt(tempHex.substring(4, 6), 16)

  return `rgba(${r},${g},${b},${opacity / 100})`
}
