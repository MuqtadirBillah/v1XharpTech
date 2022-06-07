import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BlogHero from './BlogHero';
import PostTeaser from './PostTeaser';

function BlogPage(){
    return(
        <>
            <Navigation />
            <div className="blogPage">
                <BlogHero />
                <div className="blogPosts">
                    <h2>BLOG POSTS</h2>
                    <h1>Lorem ipsum dolor sit amet<br />consectetur.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.</p>
                    <div className="posts">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='nextBut'>NEXT <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;