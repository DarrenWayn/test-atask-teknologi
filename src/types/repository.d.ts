export type Owner = {
  login: string;
  id: number;
  html_url: string;
  repos_url: string;
  items: Array;
};

export type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description?: any;
  full_name: string;
  stargazers_count: number;
  filter: Respository;
};
