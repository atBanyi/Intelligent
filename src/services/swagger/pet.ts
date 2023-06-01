// @ts-ignore
/* eslint-disable */
<<<<<<< HEAD
import { request } from 'umi';
=======
import { request } from '@umijs/max';
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1

/** Update an existing pet PUT /pet */
export async function updatePet(body: API.Pet, options?: { [key: string]: any }) {
  return request<any>('/pet', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Add a new pet to the store POST /pet */
export async function addPet(body: API.Pet, options?: { [key: string]: any }) {
  return request<any>('/pet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

<<<<<<< HEAD
/** Finds Pets by status Multiple status values can be provided with comma separated strings GET /pet/findByStatus */
export async function findPetsByStatus(
  params: {
    // query
    /** Status values that need to be considered for filter */
    status: 'available' | 'pending' | 'sold'[];
  },
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByStatus', {
    method: 'GET',
    params: {
      ...params,
    },

    ...(options || {}),
  });
}

/** Finds Pets by tags Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. GET /pet/findByTags */
export async function findPetsByTags(
  params: {
    // query
    /** Tags to filter by */
    tags: string[];
  },
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByTags', {
    method: 'GET',
    params: {
      ...params,
    },

    ...(options || {}),
  });
}

/** Find pet by ID Returns a single pet GET /pet/${param0} */
export async function getPetById(
  params: {
    // path
    /** ID of pet to return */
    petId: number;
  },
  options?: { [key: string]: any },
) {
  const { petId: param0 } = params;
  return request<API.Pet>(`/pet/${param0}`, {
    method: 'GET',
    params: { ...params },

=======
/** Find pet by ID Returns a single pet GET /pet/${param0} */
export async function getPetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPetByIdParams,
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  return request<API.Pet>(`/pet/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    ...(options || {}),
  });
}

/** Updates a pet in the store with form data POST /pet/${param0} */
export async function updatePetWithForm(
<<<<<<< HEAD
  params: {
    // path
    /** ID of pet that needs to be updated */
    petId: number;
  },
  body: { name?: string; status?: string },
  options?: { [key: string]: any },
) {
  const { petId: param0 } = params;
=======
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePetWithFormParams,
  body: { name?: string; status?: string },
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
<<<<<<< HEAD
      formData.append(ele, typeof item === 'object' ? JSON.stringify(item) : item);
=======
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    }
  });

  return request<any>(`/pet/${param0}`, {
    method: 'POST',
<<<<<<< HEAD
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...params },
=======
    params: { ...queryParams },
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    data: formData,
    ...(options || {}),
  });
}

/** Deletes a pet DELETE /pet/${param0} */
export async function deletePet(
<<<<<<< HEAD
  params: {
    // header
    api_key?: string;
    // path
    /** Pet id to delete */
    petId: number;
  },
  options?: { [key: string]: any },
) {
  const { petId: param0 } = params;
  return request<any>(`/pet/${param0}`, {
    method: 'DELETE',
    params: { ...params },
=======
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePetParams & {
    // header
    api_key?: string;
  },
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  return request<any>(`/pet/${param0}`, {
    method: 'DELETE',
    headers: {},
    params: { ...queryParams },
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    ...(options || {}),
  });
}

/** uploads an image POST /pet/${param0}/uploadImage */
export async function uploadFile(
<<<<<<< HEAD
  params: {
    // path
    /** ID of pet to update */
    petId: number;
  },
  body: { additionalMetadata?: string; file?: string },
  options?: { [key: string]: any },
) {
  const { petId: param0 } = params;
  const formData = new FormData();

=======
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileParams,
  body: { additionalMetadata?: string; file?: string },
  file?: File,
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
<<<<<<< HEAD
      formData.append(ele, typeof item === 'object' ? JSON.stringify(item) : item);
=======
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    }
  });

  return request<API.ApiResponse>(`/pet/${param0}/uploadImage`, {
    method: 'POST',
<<<<<<< HEAD
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: { ...params },
    data: formData,
=======
    params: { ...queryParams },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** Finds Pets by status Multiple status values can be provided with comma separated strings GET /pet/findByStatus */
export async function findPetsByStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findPetsByStatusParams,
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Finds Pets by tags Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. GET /pet/findByTags */
export async function findPetsByTags(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findPetsByTagsParams,
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByTags', {
    method: 'GET',
    params: {
      ...params,
    },
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    ...(options || {}),
  });
}
