import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Pressable, View, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState();
  const {control, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      age: '',
      country: ''
    }
  });

  const onSubmit = async (data) => {
    //const response = await fetch(ip_ec2);
    //const json = await response.json();
    console.log(data);
    //console.log(json);
  };

  function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('UserData')}
        />
      </View>
    );
  }

  function UserData({navigation}) {
    return (
      <LinearGradient colors={['rgba(59,78,216,1)', 'rgba(90,74,175,1)', 'rgba(27,24,39,1)']} style={styles.container}>
      
        <Text style={styles.titles}>Welcome, are you ready to travel across the space?</Text>
        <StatusBar style="dark" />

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder="Type your name"
              multiline
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType={"default"}
              returnKeyType="done" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="name" 
        />
        {errors.name && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder="Type your email"
              multiline
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType={"email-address"}
              returnKeyType="done" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="email" 
        />
        {errors.email && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder="Type your phone number"
              multiline
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType={"phone-pad"}
              returnKeyType="done" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="phone" 
        />
        {errors.phone_number && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder="What's your age?"
              multiline
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType={"number-pad"}
              returnKeyType="done" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="age" 
        />
        {errors.age && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onChange, onBlur } }) => (
            <React.Fragment>
              <Text style={styles.text}>Where do you live?</Text>
              <Picker
              prompt="Select your country"
              onValueChange={onChange}
              onBlur={onBlur}
              value={country}
              style={styles.input}
              >
                <Picker.Item label="Afghanistan" value="afghanistan" />
                <Picker.Item label="Albania" value="albania" />
                <Picker.Item label="Algeria" value="algeria" />
                <Picker.Item label="Andorra" value="andorra" />
                <Picker.Item label="Angola" value="angola" />
                <Picker.Item label="Antigua and Barbuda" value="antigua and barbuda" />
                <Picker.Item label="Argentina" value="argentina" />
                <Picker.Item label="Armenia" value="armenia" />
                <Picker.Item label="Austrailia" value="australia" />
                <Picker.Item label="Austria" value="austria" />
                <Picker.Item label="Azerbaijan" value="azerbaijan" />
                <Picker.Item label="Bahamas" value="bahamas" />
                <Picker.Item label="Bahrain" value="bahrain" />
                <Picker.Item label="Bangladesh" value="bangladesh" />
                <Picker.Item label="Barbados" value="barbados" />
                <Picker.Item label="Belarus" value="belarus" />
                <Picker.Item label="Belgium" value="belgium" />
                <Picker.Item label="Belize" value="belize" />
                <Picker.Item label="Benin" value="benin" />
                <Picker.Item label="Bhutan" value="bhutan" />
                <Picker.Item label="Bolivia" value="bolivia" />
                <Picker.Item label="Bosnia and Herzegovina" value="bosnia and herzegovina" />
                <Picker.Item label="Botswana" value="botswana" />
                <Picker.Item label="Brazil" value="brazil" />
                <Picker.Item label="Brunei" value="brunei" />
                <Picker.Item label="Bulgaria" value="bulgaria" />
                <Picker.Item label="Burkina Faso" value="burkina faso" />
                <Picker.Item label="Burundi" value="burundi" />
                <Picker.Item label="Côte d'Ivoire" value="côte d'ivoire" />
                <Picker.Item label="Cabo Verde" value="cabo verde" />
                <Picker.Item label="Cambodia" value="cambodia" />
                <Picker.Item label="Cameroon" value="cameroon" />
                <Picker.Item label="Canada" value="canada" />
                <Picker.Item label="Central African Republic" value="central african republic" />
                <Picker.Item label="Chad" value="chad" />
                <Picker.Item label="Chile" value="chile" />
                <Picker.Item label="China" value="china" />
                <Picker.Item label="Colombia" value="colombia" />
                <Picker.Item label="Comoros" value="comoros" />
                <Picker.Item label="Congo-Brazzaville" value="congo-brazzaville" />
                <Picker.Item label="Costa Rica" value="costa rica" />
                <Picker.Item label="Croatia" value="croatia" />
                <Picker.Item label="Cuba" value="cuba" />
                <Picker.Item label="Cyprus" value="cyprus" />
                <Picker.Item label="Czech Republic" value="czech republic" />
                <Picker.Item label="Democratic Republic of the Congo" value="congo" />
                <Picker.Item label="Denmark" value="denmark" />
                <Picker.Item label="Djibouti" value="djibouti" />
                <Picker.Item label="Dominica" value="dominica" />
                <Picker.Item label="Dominican Republic" value="dominican republic" />
                <Picker.Item label="Ecuador" value="ecuador" />
                <Picker.Item label="Egypt" value="egypt" />
                <Picker.Item label="El Salvador" value="el salvador" />
                <Picker.Item label="Equatorial Guinea" value="equatorial guinea" />
                <Picker.Item label="Eritrea" value="eritrea" />
                <Picker.Item label="Estonia" value="estonia" />
                <Picker.Item label="Eswatini" value="eswatini" />
                <Picker.Item label="Ethiopia" value="ethiopia" />
                <Picker.Item label="Fiji" value="fiji" />
                <Picker.Item label="Finland" value="finland" />
                <Picker.Item label="France" value="france" />
                <Picker.Item label="Gabon" value="gabon" />
                <Picker.Item label="Gambia" value="gambia" />
                <Picker.Item label="Georgia" value="georgia" />
                <Picker.Item label="Germany" value="germany" />
                <Picker.Item label="Ghana" value="ghana" />
                <Picker.Item label="Greece" value="greece" />
                <Picker.Item label="Grenada" value="grenada" />
                <Picker.Item label="Guatemala" value="guatemala" />
                <Picker.Item label="Guinea" value="guinea" />
                <Picker.Item label="Guinea-Bissau" value="guinea-bissau" />
                <Picker.Item label="Guyana" value="guyana" />
                <Picker.Item label="Haiti" value="haiti" />
                <Picker.Item label="Holy See" value="holy see" />
                <Picker.Item label="Honduras" value="honduras" />
                <Picker.Item label="Hungary" value="hungary" />
                <Picker.Item label="Iceland" value="iceland" />
                <Picker.Item label="India" value="india" />
                <Picker.Item label="Indonesia" value="indonesia" />
                <Picker.Item label="Iran" value="iran" />
                <Picker.Item label="Iraq" value="iraq" />
                <Picker.Item label="Ireland" value="ireland" />
                <Picker.Item label="Israel" value="israel" />
                <Picker.Item label="Italy" value="italy" />
                <Picker.Item label="Jamaica" value="jamaica" />
                <Picker.Item label="Japan" value="japan" />
                <Picker.Item label="Jordan" value="jordan" />
                <Picker.Item label="Kazakhstan" value="kazakhstan" />
                <Picker.Item label="Kenya" value="kenya" />
                <Picker.Item label="Kiribati" value="kiribati" />
                <Picker.Item label="Kuwait" value="kuwait" />
                <Picker.Item label="Kyrgyzstan" value="kyrgyzstan" />
                <Picker.Item label="Laos" value="laos" />
                <Picker.Item label="Latvia" value="latvia" />
                <Picker.Item label="Lebanon" value="lebanon" />
                <Picker.Item label="Lesotho" value="lesotho" />
                <Picker.Item label="Liberia" value="liberia" />
                <Picker.Item label="Libya" value="libya" />
                <Picker.Item label="Liechtenstein" value="Liechtenstein" />
                <Picker.Item label="Lithuania" value="lithuania" />
                <Picker.Item label="Luxembourg" value="luxembourg" />
                <Picker.Item label="Madagascar" value="madagascar" />
                <Picker.Item label="Malawi" value="malawi" />
                <Picker.Item label="Malaysia" value="malaysia" />
                <Picker.Item label="Maldives" value="maldives" />
                <Picker.Item label="Mali" value="mali" />
                <Picker.Item label="Malta" value="malta" />
                <Picker.Item label="Marshall Islands" value="marshall islands" />
                <Picker.Item label="Mauritania" value="mauritania" />
                <Picker.Item label="Mauritius" value="mauritius" />
                <Picker.Item label="Mexico" value="mexico" />
                <Picker.Item label="Micronesia" value="micronesia" />
                <Picker.Item label="Moldova" value="moldova" />
                <Picker.Item label="Monaco" value="monaco" />
                <Picker.Item label="Mongolia" value="mongolia" />
                <Picker.Item label="Montenegro" value="montenegro" />
                <Picker.Item label="Morocco" value="morocco" />
                <Picker.Item label="Mozambique" value="mozambique" />
                <Picker.Item label="Myanmar" value="myanmar" />
                <Picker.Item label="Namibia" value="namibia" />
                <Picker.Item label="Nauru" value="nauru" />
                <Picker.Item label="Nepal" value="nepal" />
                <Picker.Item label="Netherlands" value="netherlands" />
                <Picker.Item label="New Zealand" value="new zealand" />
                <Picker.Item label="Nicaragua" value="nicaragua" />
                <Picker.Item label="Nigeria" value="niger" />
                <Picker.Item label="Nigeria" value="nigeria" />
                <Picker.Item label="North Korea" value="north korea" />
                <Picker.Item label="North Macedionia" value="north macedionia" />
                <Picker.Item label="Norway" value="norway" />
                <Picker.Item label="Oman" value="oman" />
                <Picker.Item label="Pakistan" value="pakistan" />
                <Picker.Item label="Palau" value="palau" />
                <Picker.Item label="Palestine State" value="palestine state" />
                <Picker.Item label="Panama" value="panama" />
                <Picker.Item label="Papua New Guinea" value="papua new guinea" />
                <Picker.Item label="Paraguay" value="paraguay" />
                <Picker.Item label="Peru" value="peru" />
                <Picker.Item label="Philippines" value="philippines" />
                <Picker.Item label="Poland" value="poland" />
                <Picker.Item label="Portugal" value="portugal" />
                <Picker.Item label="Qatar" value="qatar" />
                <Picker.Item label="Romania" value="romania" />
                <Picker.Item label="Russia" value="russia" />
                <Picker.Item label="Rwanda" value="rwanda" />
                <Picker.Item label="Saint Kitts and Nevis" value="saint kitts and nevis" />
                <Picker.Item label="Saint Lucia" value="saint lucia" />
                <Picker.Item label="Saint Vincent and the Grenadines" value="saint vincente and the grenadines" />
                <Picker.Item label="Samoa" value="samoa" />
                <Picker.Item label="San Marino" value="san marino" />
                <Picker.Item label="Sao Tome and Principe" value="sao tome and principe" />
                <Picker.Item label="Saudi Arabia" value="saudi arabia" />
                <Picker.Item label="Senegal" value="senegal" />
                <Picker.Item label="Serbia" value="serbia" />
                <Picker.Item label="Seychelles" value="seychelles" />
                <Picker.Item label="Sierra Leone" value="sierra leone" />
                <Picker.Item label="Slovakia" value="slovakia" />
                <Picker.Item label="Slovenia" value="slovenia" />
                <Picker.Item label="Solomon Islands" value="solomon islands" />
                <Picker.Item label="Somalia" value="somalia" />
                <Picker.Item label="South Africa" value="south africa" />
                <Picker.Item label="South Korea" value="south korea" />
                <Picker.Item label="South Sudan" value="south sudan" />
                <Picker.Item label="Spain" value="spain" />
                <Picker.Item label="Sri Lanka" value="sri lanka" />
                <Picker.Item label="Sudan" value="sudan" />
                <Picker.Item label="Suriname" value="suriname" />
                <Picker.Item label="Sweden" value="sweden" />
                <Picker.Item label="Switzerland" value="switzerland" />
                <Picker.Item label="Syria" value="syria" />
                <Picker.Item label="Tajikistan" value="tajikistan" />
                <Picker.Item label="Tanzania" value="tanzania" />
                <Picker.Item label="Thailand" value="thailand" />
                <Picker.Item label="Timor-Leste" value="timor-leste" />
                <Picker.Item label="Togo" value="togo" />
                <Picker.Item label="Tonga" value="tonga" />
                <Picker.Item label="Trinidad and Tobago" value="trinidad and tobago" />
                <Picker.Item label="Tunisia" value="tunisia" />
                <Picker.Item label="Turkey" value="turkey" />
                <Picker.Item label="Turkmenistan" value="turkmenistan" />
                <Picker.Item label="Tuvalu" value="tuvalu" />
                <Picker.Item label="Uganda" value="uganda" />
                <Picker.Item label="Ukraine" value="ukraine" />
                <Picker.Item label="United Arab Emirates" value="united arab emirates" />
                <Picker.Item label="United Kingdom" value="united kingdom" />
                <Picker.Item label="United States of America" value="united states of america" />
                <Picker.Item label="Uruguay" value="uruguay" />
                <Picker.Item label="Uzbekistan" value="uzbekistan" />
                <Picker.Item label="Vanuatu" value="vanuatu" />
                <Picker.Item label="Venezuela" value="venezuela" />
                <Picker.Item label="Vietnam" value="vietnam" />
                <Picker.Item label="Yemen" value="yemen" />
                <Picker.Item label="Zambia" value="zambia" />
                <Picker.Item label="Zimbabwe" value="zimbabwe" />
              </Picker>
            </React.Fragment>
          )}
          name="country" 
        />
        {errors.country && <Text style={styles.alert_text}>This is required.</Text>}  

        <Pressable style={styles.button} onPress={() => {
          handleSubmit(onSubmit);
          navigation.navigate('Formulary');
        }}>
          <Text style={styles.bold_text}>Submit</Text>
        </Pressable>

        <Text style={styles.disc}>
          Disclaimer: The development team reserves the right to make use of the information provided, 
          and undertakes to use it responsibly and to safeguard it. 
          The machine learning model used does not reflect the perspectives or ideologies of any of the team members.
        </Text>
      </LinearGradient>
    );
  }

  function Formulary({navigation}) {
    return(
      <Text>
        Hola
      </Text>
    )
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: { backgroundColor: '#5a4aaf', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}} />
        <Stack.Screen name="UserData" component={UserData} options={{title: "Enter your information", headerStyle: { backgroundColor: '#5a4aaf', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}} />
        <Stack.Screen name="Formulary" component={Formulary} options={{title: "Preparing for the trip", headerStyle: { backgroundColor: '#5a4aaf', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titles: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: 20,
    color: '#fff',
  },
  disc: {
    fontSize: 12,
    textAlign: 'center',
    margin: 20,
    color: '#bf97c9',
  },
  input: {
    height: 40, 
    borderColor: '#9b8ced', 
    backgroundColor: '#ffffff80',
    borderRadius: 10,
    borderWidth: 5, 
    color:'#fff', 
    fontSize:20, 
    marginHorizontal:5, 
    alignContent: 'center',
    width: 380,
    textAlign: 'center',
    marginVertical: 10
  }, 
  alert_text: {
    color: 'red'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: '#1cbd64'
  },
  bold_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});