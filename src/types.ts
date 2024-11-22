import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    course: string;
    price: number;
  }

  export type RootStackParamList = {
    Home: undefined;
    AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> }
    Filter: { menuItems: MenuItem[]; filterByCourse: (course: string) => MenuItem[] };
  };
  
  export type FilterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Filter'>;
  export type FilterScreenRouteProp = RouteProp<RootStackParamList, 'Filter'>;
  
  export type FilterScreenProps = {
    navigation: FilterScreenNavigationProp;
    route: FilterScreenRouteProp;
  };