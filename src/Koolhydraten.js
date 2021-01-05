import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalstyles } from './globalstyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Koolhydratenscherm() {
    return (
        <View>
            <StatusBar style='light' backgroundColor='#00a1c0' />
            <ScrollView>
                <View>
                    <Text style={globalstyles.titleText}>
                    Koolhydraten
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Koolhydraten vormen een belangrijke bron van energie voor het lichaam. Koolhydraat rijke producten bevatten ook vaak vezels die belangrijk zijn voor een goede spijsvertering. Koolhydraten zijn dus erg belangrijk.
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Gezonde bronnen van koolhydraten zijn volkoren graanproducten zoals volkoren pasta, bruin brood, couscous, aardappel en havermout. Deze producten bevatten niet alleen veel koolhydraten maar zijn ook volkoren. Volkoren producten bevatten vezels. Vezels zorgen voor een goede spijsvertering en ze zorgen ervoor dat je minder snel honger krijgt. 
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Minder gezonde bronnen van koolhydraten zijn bijvoorbeeld witte rijst, witbrood, witte pasta en beschuit. Deze producten bevatten wel veel koolhydraten, maar erg weinig of zelfs geen vezels. De vuistregel is dus dat volkoren producten gezonder zijn omdat deze vezels bevatten. 
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Er zijn veel meer koolhydraat rijke bronnen dan hier genoemd. Bekijk het etiket op een voedselproduct om erachter te komen hoeveel koolhydraten er precies in zitten. Bekijk vergelijkbare producten eens om erachter te komen wat de verschillen zijn. 
                    </Text>

                    <Text style={globalstyles.titleText}>
                    Suikers
                    </Text>

                    <Text style={globalstyles.normalText}>
                    Suikers zijn hele korte koolhydraten. Doordat ze kort zijn worden ze snel opgenomen en krijg je snel veel energie. Dit is vaak teveel energie voor het lichaam. De extra energie die het het lichaam niet nodig heeft wordt opgeslagen als vet. De energie van suiker is ook snel weer weg. Hierdoor word je moe en krijg je sneller honger. Op deze manier eet je al snel teveel waardoor je dikker wordt. Daarom wordt het over het algemeen afgeraden om producten te eten waar veel suiker in zit. Teveel suiker eten kan ook bijdragen aan het ontwikkelen van diabetes.
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}