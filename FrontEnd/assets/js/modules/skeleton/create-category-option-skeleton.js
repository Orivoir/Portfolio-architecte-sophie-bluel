/**
 * Model option:
 * <option value="{id}">{name}</option>
 */

/**
 * 
 * @param {id: number; name; string} options 
 * @returns 
 */
export default function createCategoryOptionSkeleton({id, name}) {

  const option = document.createElement("option")

  option.value = id
  option.textContent = name

  return option
}