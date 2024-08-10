import React from 'react';
import Link from 'next/link';
import config from '../config/config.json';
import { PostResponse } from '../interfaces/InterfaceCollection';

const PostView: React.FC<{ post: PostResponse }> = ({ post }) => {
  const apiProvider = config.currentProvider;
  const settings = config.providers[apiProvider as keyof typeof config.providers];

  return (
    <li className="beitragskasten" key={post.id}>
      <Link href={`/rezept/${post.title}`}>
        <h3 className="beitragsname">{post.title}</h3>
      </Link>
      {post.content && (
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      )}
      {post.imageURL && (
        <div>
          <img src={`${settings.baseURL}${post.imageURL}`} alt={post.title} className="foodpic" />
        </div>
      )}
      {post.zutaten && (
        <details className="rezeptblock">
          <summary>Zutaten</summary>
          <ul className="schrittliste">
            {post.zutaten.map((ingredient, index) => (
              <li className="schritt" key={index}>{ingredient}</li>
            ))}
          </ul>
        </details>
      )}
      {post.zubereitung && (
        <details className="rezeptblock">
          <summary>Zubereitung</summary>
          <ul className="schrittliste">
            {post.zubereitung.map((step, index) => (
              <li className="schritt" key={index}>{step}</li>
            ))}
          </ul>
        </details>
      )}
    </li>
  );
};

export default PostView;
