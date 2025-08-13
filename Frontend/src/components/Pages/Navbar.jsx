import React from 'react';
import styles from './styles';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className='flex justify-between p-5'>
            <ul className='flex gap-5 '>
                <NavLink to={'/'}  className={({ isActive }) => isActive ? styles.active:null}>Home</NavLink>
                <NavLink to={'/bloge'} className={({ isActive }) => isActive ? styles.active:null}>Bloge</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? styles.active:null}>Contact</NavLink>
                <NavLink to={'/life'} className={({ isActive }) => isActive ? styles.active:null}>Your Life</NavLink>
            </ul>
            <div className='flex gap-5'>
                <button>Login</button>
                <button className={styles.btn}>Signup</button>
            </div>
        </div>
    );
}

export default Navbar;
