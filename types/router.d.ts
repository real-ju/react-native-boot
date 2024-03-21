import type { ComponentType } from 'react';

export interface RouteRecord {
  name: string;
  component: ComponentType<any>;
  public: boolean;
}
