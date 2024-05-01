import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Loader } from '@chatscope/chat-ui-kit-react'

 const Profile = () => {


    const {user,loading } = useSelector(state => state.auth)

  return (
    <Fragment>
  {loading ? <Loader/> :(
    <Fragment>
        
        <h2 classe="mt-5 ml-5">mon profile</h2>
        <div class="col-12 col-md-3">
            <figure class='avatar avatar-profile'>
                <img class="rounded-circle img-fluid" src="" alt=""/>

            </figure>
<a href="#" id="edit_profile" class=" btn btn-primary btn-block">
    Edit Profile
</a>
        </div>
        <div class="col-12 col-md-5">
<h4> Nam</h4>
<p>{user.name} </p>
<h4> Adress email </h4>
<p>{user.email} </p>
<h4>Joined on </h4>
<p>{String(user.createdAt).substring(0.10)} </p>
{user.role !== 'admin ' && ( 
<Link to='#' className='btn btn-danger btn-block mt-5'> my order</Link>
  )}

<Link to='#' className='btn btn-danger btn-block mt-5 mt-3'>my password</Link>
      
        
        </div>
      </Fragment>
  )   
  
  }
   

</Fragment>
)
 }
export default Profile;