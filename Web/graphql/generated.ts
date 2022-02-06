import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateProductInput = {
  images?: InputMaybe<Array<Scalars['String']>>;
  product_name: Scalars['String'];
  sold: Scalars['Boolean'];
  user_id: Scalars['String'];
  video: Scalars['String'];
};

export type CreateUserInput = {
  confirm_email: Scalars['Boolean'];
  email: Scalars['String'];
  expiration_email_time?: InputMaybe<Scalars['DateTime']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  password_confirm: Scalars['String'];
  user_id: Scalars['String'];
  user_name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMockData: Array<User>;
  createProduct: Product;
  createUser: ReturnType;
  deleteUser: Scalars['String'];
  removeProduct: Scalars['String'];
  updateUserInfo: Scalars['String'];
};


export type MutationAddMockDataArgs = {
  customer_number: Scalars['Int'];
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  user_id: Scalars['String'];
};


export type MutationRemoveProductArgs = {
  product_id: Scalars['String'];
};


export type MutationUpdateUserInfoArgs = {
  updateUserInfo: UpdateUserInput;
};

export type Product = {
  __typename?: 'Product';
  images?: Maybe<Array<Scalars['String']>>;
  product_id: Scalars['String'];
  product_name: Scalars['String'];
  sold: Scalars['Boolean'];
  user: User;
  user_id: Scalars['String'];
  video: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  UserProducts: Array<Product>;
  findByEmail: User;
  product: Product;
  products: Array<Product>;
  user: User;
  users: Array<User>;
};


export type QueryUserProductsArgs = {
  user_id: Scalars['String'];
};


export type QueryFindByEmailArgs = {
  email: Scalars['String'];
};


export type QueryProductArgs = {
  product_id: Scalars['String'];
};


export type QueryUserArgs = {
  user_id: Scalars['String'];
};

export type ReturnType = {
  __typename?: 'ReturnType';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UpdateUserInput = {
  confirm_email?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  expiration_email_time?: InputMaybe<Scalars['DateTime']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirm?: InputMaybe<Scalars['String']>;
  user_id: Scalars['String'];
  user_name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  confirm_email: Scalars['Boolean'];
  email: Scalars['String'];
  expiration_email_time?: Maybe<Scalars['DateTime']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  products?: Maybe<Array<Product>>;
  user_id: Scalars['String'];
  user_name: Scalars['String'];
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', product_id: string, product_name: string, video: string }> };


export const ProductsDocument = `
    query Products {
  products {
    product_id
    product_name
    video
  }
}
    `;
export const useProductsQuery = <
      TData = ProductsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: ProductsQueryVariables,
      options?: UseQueryOptions<ProductsQuery, TError, TData>
    ) =>
    useQuery<ProductsQuery, TError, TData>(
      variables === undefined ? ['Products'] : ['Products', variables],
      fetcher<ProductsQuery, ProductsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ProductsDocument, variables),
      options
    );