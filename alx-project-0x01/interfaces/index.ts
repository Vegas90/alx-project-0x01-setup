export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// This interface is used for the modal component to handle post creation or editing
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}