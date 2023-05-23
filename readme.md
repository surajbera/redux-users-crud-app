```JS
import axios from './axiosConfig'

export const getUsers = () => axios.get('/users')
export const getUserbyId = (id) => axios.get(`/users/${id}`)
export const updateUser = (userId, userData) => axios.put(`/users/${userId}`, userData)
export const deleteUser = (userId) => axios.delete(`/users/${userId}`)
```

Addition of async/await keywords in the second version don't add anything useful in this particular
case. However, using async/await would be useful if you needed to do something with the result of
the promise inside your function before returning it.

```JS
import axios from './axiosConfig'

export const getUsers = async () => await axios.get('/users')
export const getUserbyId = async (id) => await axios.get(`/users/${id}`)
export const updateUser = async (userId, userData) => await axios.put(`/users/${userId}`, userData)
export const deleteUser = async (userId) => await axios.delete(`/users/${userId}`)
```
