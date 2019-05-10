import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";
import { Tags } from "@tryghost/helpers-gatsby";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost;
    const created_at = new Date(post.created_at);
    console.log("Created at: " + created_at);
    const dateString = created_at
        ? created_at.toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : undefined;

    const authorHref =
        false && post.primary_author.website
            ? post.primary_author.website
            : `/author/${post.primary_author.slug}`;

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <article className="post content">
                    <section className="post-intro">
                        <div className="meta">
                            {dateString && (
                                <h5 className="date">{dateString}</h5>
                            )}
                            {post.tags &&
                                post.tags.length > 0 &&
                                dateString && <h5>&bull;</h5>}
                            {post.tags && (
                                <div className="post-card-tags">
                                    <Tags
                                        post={post}
                                        visibility="public"
                                        autolink={false}
                                    />
                                </div>
                            )}
                        </div>
                        <h1 className="content-title">{post.title}</h1>
                        {post.excerpt && (
                            <h3 className="content-excerpt">{post.excerpt}</h3>
                        )}
                    </section>
                    {post.feature_image ? (
                        <figure className="post-feature-image">
                            <img src={post.feature_image} alt={post.title} />
                        </figure>
                    ) : null}

                    {/* The main post content */}
                    <section
                        className="content-body load-external-scripts"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />

                    <hr className="end-of-post" />

                    <section className="post-author">
                        <div className="post-card-avatar">
                            {post.primary_author.profile_image ? (
                                <img
                                    className="author-profile-image"
                                    src={post.primary_author.profile_image}
                                    alt={post.primary_author.name}
                                />
                            ) : (
                                <img
                                    className="default-avatar"
                                    src="/images/icons/avatar.svg"
                                    alt={post.primary_author.name}
                                />
                            )}
                        </div>
                        <div className="post-author-bio">
                            <h5>Author</h5>
                            <h3>
                                <a href={authorHref}>
                                    {post.primary_author.name}
                                </a>
                            </h3>
                            {post.primary_author.bio && (
                                <p>{post.primary_author.bio}</p>
                            )}
                        </div>
                    </section>
                </article>
            </Layout>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
