import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../apis/uploader';
import { addNewProduct } from '../apis/Firebase';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    //제품의 사진을 Cloudinary에 업로드하고 url을 획득
    // Firebase에 새로운 제품을 추가함
    uploadImage(file).then((url) => {
      console.log(url);
      addNewProduct(product, url);
    });
  };

  const handleChange = ({ target }) => {
    const { name, value, files } = target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct({ ...product, [name]: value });
  };

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <h1 className="text-2xl text-center font-bold">새로운 제품 등록</h1>
      <form className="h-1/2" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          placeholder="제품명"
          required
          onChange={handleChange}
          className="border-solid border-zinc-400"
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          placeholder="옵션들(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button text={'제품 등록하기'} />
      </form>
    </section>
  );
}
