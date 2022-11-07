import React from 'react'


const SearchBox=({searchText})=>{
return(
<div className='search'>
    <input type="search" placeholder='search field'  onChange={searchText}/>
</div>

)
}

export default SearchBox;