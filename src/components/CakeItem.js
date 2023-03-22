import { recipeList } from '../datas/recipeList'


function CakeItem({cover, name, duration, link}) {
  return (
    <li className='cookbook-cake-item'>
      <img className='cookbook-cake-image' src={recipeList.cover} alt={`${recipeList.name} cover`}/>
      <span className='cookbook-cake-duration'>{recipeList.duration} min</span>
      {name}
    </li>
  )
}

export default CakeItem
