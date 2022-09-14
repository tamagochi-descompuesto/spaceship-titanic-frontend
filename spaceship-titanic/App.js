import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Pressable, View, Button, ScrollView, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';

export default function App() {
  const [checked, setChecked] = useState(false);
  const [country, setCountry] = useState('');
  const [passengerGroup, setPassengerGroup] = useState('');
  const [homePlanet, setHomePlanet] = useState('');
  const [deck, setDeck] = useState('');
  const [side, setSide] = useState('');
  const [destiny, setDestiny] = useState('');
  //CAMBIAAAAAAAR
  const [transported, setTransported] = useState(false);
  const {control, handleSubmit, formState: {errors}, getValues } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      age: '',
      country: "none",
      cryo_sleep: false,
      vip: false,
      room_service: 0,
      food_court: 0,
      shopping_mall: 0,
      spa: 0,
      vr_deck: 0,
      passenger_group: "1",
      home_planet: "Earth",
      deck: "A",
      side: "T",
      destiny: "55 Cancri e"
    }
  });

  const onSubmit = async (data) => {
    country !== "" ? data.country = country : data.country;
    passengerGroup !== "" ? data.passenger_group = passengerGroup : data.passenger_group;
    homePlanet !== "" ? data.home_planet = homePlanet : data.home_planet;
    deck !== "" ? data.deck = deck : data.deck;
    side !== "" ? data.side = side : data.side;
    destiny !== "" ? data.destiny = destiny : data.destiny;
    //const response = await fetch('http://3.88.193.156:8080/spaceship/getPrediction', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
    //const json = await response.json();
    console.log(data);
    //console.log(json);
    //setTransported(json.Transported);
    console.log(transported);
  };

  const sendEmail = async () => {
    //Here send email
    console.log(getValues("email"));
  }

  function HomeScreen({navigation}) {
    return (
      <ScrollView>
      <LinearGradient colors={['rgba(59,78,216,1)', 'rgba(90,74,175,1)', 'rgba(27,24,39,1)']} style={styles.container}>
        <Text style={styles.titles}>Welcome to Perros Sarnosos KFC</Text>
        <Image source={require('./assets/spaceship_titanic_no_bg.png')} />
        <Text style={styles.text}>
          We are a specialized insurance agency that cares about your security in outer space trips.
        </Text>
        <Text style={styles.text}>
          We make sure that you are prepared for your trip using a Machine Learning model that can predict accurately your chances of surviving.
        </Text>
        <Text style={styles.text}>
          Here are some graphs that show the insights of our clients:
        </Text>
        <Text style={styles.text}>
          INSERTE GRÁFICAS PERRONAS AQUÍ XD 
        </Text>
        <Pressable style={styles.button} onPress={() => {
            navigation.navigate('UserData')
            }}>
            <Text style={styles.bold_text}>
              View my chances
            </Text>
          </Pressable>
      </LinearGradient>
      </ScrollView>
    );
  }

  function UserData({navigation}) {
    return (
    <ScrollView maintainVisibleContentPosition={{autoscrollToTopThreshold: 1}}>
      <LinearGradient colors={['rgba(59,78,216,1)', 'rgba(90,74,175,1)', 'rgba(27,24,39,1)']} style={styles.container}>
      
        <Text style={styles.titles}>Are you ready to travel across the space?</Text>
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
          render={({ field: { onBlur, value, onFocus } }) => (
            <React.Fragment>
              <Text style={styles.text}>Where do you live?</Text>
              <Picker
              prompt="Select your country"
              onValueChange={(item) => {
                setCountry(item);
              }}
              onBlur={onBlur}
              selectedValue={country}
              value={value}
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

        <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>Would you like to be cryosleeped?</Text>
              <Checkbox 
                style={{margin: 10}}
                value={value}
                onValueChange={onChange}
                onBlur={onBlur}
                color={checked ? '#4630EB' : undefined}
              />
            </React.Fragment>
          )}
          name="cryo_sleep" 
        />

        <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>Are you a VIP passenger?</Text>
              <Checkbox 
                style={{margin: 10}}
                value={value}
                onValueChange={onChange}
                onBlur={onBlur}
                color={checked ? '#4630EB' : undefined}
              />
            </React.Fragment>
          )}
          name="vip" 
        />

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>How much do you plan to spend on the room service?</Text>
              <TextInput 
              placeholder="Type the quantity"
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
            </React.Fragment>
          )}
          name="room_service" 
        />
        {errors.room_service && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>How much do you plan to spend on the food court?</Text>
              <TextInput 
              placeholder="Type the quantity"
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
            </React.Fragment>
          )}
          name="food_court" 
        />
        {errors.food_court && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>How much do you plan to spend on the shopping mall?</Text>
              <TextInput 
              placeholder="Type the quantity"
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
            </React.Fragment>
          )}
          name="shopping_mall" 
        />
        {errors.shopping_mall && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>How much do you plan to spend on the spa?</Text>
              <TextInput 
              placeholder="Type the quantity"
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
            </React.Fragment>
          )}
          name="spa" 
        />
        {errors.spa && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: true,
          }} 
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>How much do you plan to spend on the VR deck?</Text>
              <TextInput 
              placeholder="Type the quantity"
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
            </React.Fragment>
          )}
          name="vr_deck" 
        />
        {errors.vr_deck && <Text style={styles.alert_text}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>What's your origin planet?</Text>
              <Picker
              prompt="Select your planet"
              selectedValue={homePlanet}
              onValueChange={(item) => {
                setHomePlanet(item);
              }}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              >
                <Picker.Item label="Earth" value="Earth" />
                <Picker.Item label="Europa" value="Europa" />
                <Picker.Item label="Mars" value="Mars" />
              </Picker>
            </React.Fragment>
          )} 
          name="home_planet"
          />
          {errors.home_planet && <Text style={styles.alert_text}>This is required.</Text>}

          <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>What's your passenger group?</Text>
              <Picker
              prompt="Select your group"
              selectedValue={passengerGroup}
              onValueChange={(item) => {
                setPassengerGroup(item);
              }}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              >
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="6" value={6} />
                <Picker.Item label="7" value={7} />
                <Picker.Item label="8" value={8} />
              </Picker>
            </React.Fragment>
          )} 
          name="home_planet"
          />
          {errors.home_planet && <Text style={styles.alert_text}>This is required.</Text>}   

          <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>On what deck is your cabin located?</Text>
              <Picker
              prompt="Select your deck"
              onValueChange={(item) => {
                setDeck(item);
              }}
              onBlur={onBlur}
              selectedValue={deck}
              value={value}
              style={styles.input}
              >
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="D" value="D" />
                <Picker.Item label="E" value="E" />
                <Picker.Item label="F" value="F" />
                <Picker.Item label="G" value="G" />
              </Picker>
            </React.Fragment>
          )} 
          name="deck"
          />
          {errors.deck && <Text style={styles.alert_text}>This is required.</Text>}

          <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>On what side is your cabin located?</Text>
              <Picker
              prompt="Select your side"
              selectedValue={side}
              onValueChange={(item) => {
                setSide(item);
              }}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              >
                <Picker.Item label="T" value="T" />
                <Picker.Item label="P" value="P" />
                <Picker.Item label="S" value="S" />
              </Picker>
            </React.Fragment>
          )} 
          name="side"
          />
          {errors.side && <Text style={styles.alert_text}>This is required.</Text>} 

          <Controller
          control={control}
          rules={{
          required: false,
          }} 
          render={({ field: { onBlur, value } }) => (
            <React.Fragment>
              <Text style={styles.text}>What's your destiny?</Text>
              <Picker
              prompt="Select your destiny"
              selectedValue={destiny}
              onValueChange={(item) => {
                setDestiny(item);
              }}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              >
                <Picker.Item label="55 Cancri e" value="55 Cancri e" />
                <Picker.Item label="PSO J318.5-22" value="PSO J318.5-22" />
                <Picker.Item label="TRAPPIST-1e" value="TRAPPIST-1e" />
              </Picker>
            </React.Fragment>
          )} 
          name="destiny"
          />
          {errors.destiny && <Text style={styles.alert_text}>This is required.</Text>}  

        <Pressable style={styles.button} onPress={() => {
          handleSubmit(onSubmit)()
          navigation.navigate('Result')
          }}>
          <Text style={styles.bold_text}>Submit</Text>
        </Pressable>

        <Text style={styles.disc}>
          Disclaimer: The development team reserves the right to make use of the information provided, 
          and undertakes to use it responsibly and to safeguard it. 
          The machine learning model used does not reflect the perspectives or ideologies of any of the team members.
        </Text>
      </LinearGradient>
    </ScrollView>
    );
  }

  function Result({navigation}) {
    if(transported){
      return(
        <LinearGradient colors={['rgba(59,78,216,1)', 'rgba(90,74,175,1)', 'rgba(27,24,39,1)']} style={styles.container}>
          <Text style={styles.titles}>
            Congratulations! your profile meets the requirements to survive the trip.
          </Text>
          <Text style={styles.text}>
            Do yo wish to know more about how we work and stats related to more trips?
            Visit our homepage with the button down below.
          </Text>
          <Pressable style={styles.button} onPress={() => {
            navigation.navigate('Home')
            }}>
            <Text style={styles.bold_text}>Go back home</Text>
          </Pressable>
        </LinearGradient>
      );
    }else{
      return(
        <LinearGradient colors={['rgba(59,78,216,1)', 'rgba(90,74,175,1)', 'rgba(27,24,39,1)']} style={styles.container}>
          <Text style={styles.titles}>
            Sorry, your profile doesn't meet the requirements to survive the trip.
          </Text>
          <Text style={styles.text}>
            But don't worry, we can help you to increase your chances of surviving.
            Press the button below to send you an email with all the information you need to know to improve your chances!.
          </Text>
          <Pressable style={styles.button} onPress={() => {
            sendEmail();
            Alert.alert("Email sent!", 
            "We have sent you an email to your personal account. If the email hasn't arrived, please try again.",
            [
              {
                text: "Try again",
                onPress: () => sendEmail()
              },
              {
                text: "Dismiss",
                onPress: () => console.log("Dismiss!")
              }
            ]);
            navigation.navigate('Home');
            }}>
            <Text style={styles.bold_text}>Increase my chances!</Text>
          </Pressable>
        </LinearGradient>
      );
    }
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: { backgroundColor: '#5a4aaf', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}} />
        <Stack.Screen name="UserData" component={UserData} options={{title: "Enter your information", headerStyle: { backgroundColor: '#5a4aaf', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}} />
        <Stack.Screen name="Result" component={Result} options={{title: " Check your results", headerStyle: { backgroundColor: '#5a4aaf', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titles: {
    fontSize: 40,
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: 20,
    color: '#fff',
    paddingTop: 20,
  },
  disc: {
    fontSize: 12,
    textAlign: 'center',
    margin: 20,
    color: '#bf97c9',
    paddingBottom: 30
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});