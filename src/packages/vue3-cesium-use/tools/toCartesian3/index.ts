import * as Cesium from 'cesium'
import { type MaybeCoordinates, normalizeCoordinates } from '../../utils/coordinates'

type NumberOrString = number | string

export function toCartesian3(
  longitude: NumberOrString,
  latitude: NumberOrString,
  altitude?: NumberOrString
): Cesium.Cartesian3
export function toCartesian3(source: Cesium.Cartesian3 | MaybeCoordinates): Cesium.Cartesian3
export function toCartesian3(
  arg1: Cesium.Cartesian3 | MaybeCoordinates | NumberOrString,
  arg2?: NumberOrString,
  arg3?: NumberOrString
): Cesium.Cartesian3 {
  if (arg1 instanceof Cesium.Cartesian3) return arg1

  const source = !arg2 ? arg1 : [arg1, arg2, arg3]

  const { longitude, latitude, height } = normalizeCoordinates(source as any)

  return Cesium.Cartesian3.fromDegrees(longitude, latitude, height)
}
