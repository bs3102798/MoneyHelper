/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }
    //console.log(subpage)

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }



    if (!ready) {
        return 'Loading....'
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }



    function linkClasses(type = null) {
        let classes = 'py-2 px-6'
        if (type == subpage) {
            classes += ' bg-primary text-white rounded-full';
        }


        return classes
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        // <div>account page {user.name} {user.email} </div>
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bills')} to={'/account/bills'}>My Bills</Link>
                <Link className={linkClasses('tracker')} to={'/account/tracker'}>My Tracker</Link>
            </nav>
            {subpage === 'profile' && (
                <div className=" text-center max-w-xl mx-auto">
                    Logged in as {user.name} ({user.email}) <br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>

                </div>
            )}
            {subpage === 'bills' && (
                <>
                    <div className=" text-center max-w-xl mx-auto">
                        what the amount of you bill
                    </div>
                    {/*

                    <form className=" flex items-center justify-center  mx-auto">
                        <div className="">
                            <div className="">
                                <label>

                                </label>
                                <input className="" placeholder="add bill" />
                                <button className="">test</button>


                            </div>
                        </div>
                    </form> */}
                    <section className="flex gap-2 items-end">
                        <div className=" text-center max-w-xl mx-auto flex gap-3">

                            <input type="text"
                                placeholder="name category"
                            // value={CategoryName}
                            // onChange={ev => setCategoryName(ev.target.value)}
                            />
                            <input type="number"
                                placeholder="price amount"
                            // value={CategoryName}
                            // onChange={ev => setCategoryName(ev.target.value)}
                            />
                            <div className="pb-2 flex gap-2">
                                <button
                                    className="border border-primary"
                                    type="submit">
                                    {/* {editedCategory ? 'Update' : 'Create'} */}
                                    add bill
                                </button>

                                {/* <button type="button border-primary" onClick={() => {
                                    // setEditedCategory(null)
                                    // setCategoryName('')
                                }}>Delete</button> */}
                            </div>
                        </div>
                    </section>
                    <div className=" text-center max-w-xl mx-auto mt-20">
                        bills
                    </div>


                </>
            )}
            {subpage === 'tracker' && (
                <div className=" text-center max-w-xl mx-auto">
                    Tracker

                </div>
            )}
        </div>
    )
}