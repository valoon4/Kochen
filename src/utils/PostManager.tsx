import React, { useState } from 'react';
import PostView from '../displayers/PostView';
import { PostResponse } from '../interfaces/InterfaceCollection';
import createResource from './Controller';
import { loadPosts, sortPosts, searchPosts } from './Controller';
import PaginationView from '../displayers/PaginationView';

const dataResource = createResource<PostResponse[]>(loadPosts);

export function PostManager() {
  const postdata = dataResource.read();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('oldest');
  const [currentPage, setCurrentPage] = useState(1);
  
  if (!postdata) {
    return null;
  }

  const postsPerPage = 3;

  let filteredData = searchPosts(postdata, searchTerm);
  filteredData = sortPosts(filteredData, sortBy);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const totalPages = Math.ceil(filteredData.length / postsPerPage);
  const currentPagePosts = filteredData.slice(startIndex, endIndex);

  return (
    <div>
      <input
        type="text"
        placeholder="Per Name suchen..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="oldest">Sortieren nach Neuestem</option>
        <option value="newest">Sortieren nach Ältestem</option>
        <option value="title">Sortieren nach Titel (A-Z)</option>
        <option value="titleReverse">Sortieren nach Titel (Z-A)</option>
      </select>
      <ul className="reihe" >
        {currentPagePosts.map((post) => (
          <PostView key={post.id} post={post} />
        ))}
      </ul>
      <PaginationView totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}
