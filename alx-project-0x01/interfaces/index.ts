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

export interface UserData {
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

// Props for the modal
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void; //
}

export interface PropertyProps{

name: string;
address:{
  state:string;
  city:string;
  country:string;

}
rating: number;
category: string[];
  price: number;
 offers:{
  bed: number;
  shower: boolean;
  occupants: number;
 }
 image: string;
 discount: string;
}

export interface PillarProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Icon can be any React node (e.g., SVG, FontAwesome icon)
  link?: string; // Optional link for the pillar
}