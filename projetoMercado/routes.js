import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/home'
import { Pesquisa } from './pages/homePesquisa'
import { Login } from './pages/login'
import { Notas } from './pages/notas'
import { Vendas } from './pages/vendas'
import { Contas } from './pages/conta'
import { Carrinho } from './pages/carrinho'
import { Calculadora } from './pages/calculadora'
import { Adicionar } from './pages/adicionarNotas'
import { Ionicons } from '@expo/vector-icons/'


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="homePesquisa"
                component={Pesquisa}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="serach" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="search-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="login"
                component={Login}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="log-in" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="log-in-outline" />)
                    }
                }}
                />
                 <Tab.Screen
                name="notas"
                component={Notas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="bookmark" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="bookmark-outline" />)
                    }
                }}
                />
                <Tab.Screen
                name="vendas"
                component={Vendas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="card" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="card-outline" />)
                    }
                }}
                />
                <Tab.Screen
                name="conta"
                component={Contas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="person" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="person-outline" />)
                    }
                }}
                />
                <Tab.Screen
                name="carrinho"
                component={Carrinho}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="cart" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="cart-outline" />)
                    }
                }}
                />
                <Tab.Screen
                name="calculadora"
                component={Calculadora}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="calculator" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="calculator-outline" />)
                    }
                }}
                />
                <Tab.Screen
                name="adicionarNotas"
                component={Adicionar}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="mail-open" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="mail-open-outline" />)
                    }
                }}
                />
        </Tab.Navigator>
    )
}