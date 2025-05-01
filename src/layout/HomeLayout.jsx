import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LetestNews from '../components/LetestNews';

const HomeLayout = () => {
    return (
        <div>
            <header className='py-10'>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LetestNews></LetestNews>
                </section>
            </header>
            <main>
                <section className="left_container"></section>
                <section className="main_container">
                    <Outlet></Outlet>
                </section>
                <section className="right_container"></section>
            </main>
        </div>
    );
};

export default HomeLayout;