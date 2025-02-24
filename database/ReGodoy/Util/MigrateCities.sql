DECLARE @Nac_Codigo INT
DECLARE @Ciudades VARCHAR(MAX)

DECLARE cur_Paises CURSOR FOR
SELECT Nac_Codigo, CIU FROM (
  SELECT 'Afganistán' PAIS,'Kabul, Kandahar, Herat'CIU																				
UNION SELECT 'Albania','Tirana, Durrës, Vlorë'																						
UNION SELECT 'Alemania','Berlín, Múnich, Hamburgo'																						
UNION SELECT 'Andorra','Andorra la Vella, Escaldes-Engordany'																						
UNION SELECT 'Angola','Luanda, Huambo, Lobito'																						
UNION SELECT 'Antigua y Barbuda','Saint JohnS'																						
UNION SELECT 'Arabia Saudita','Riad, Yeda, La Meca'																						
UNION SELECT 'Argelia','Argel, Orán, Constantina'																						
UNION SELECT 'Argentina','Buenos Aires, Córdoba, Rosario'																						
UNION SELECT 'Armenia','Ereván, Gyumri, Vanadzor'																						
UNION SELECT 'Australia','Sídney, Melbourne, Brisbane'																						
UNION SELECT 'Austria','Viena, Graz, Linz'																						
UNION SELECT 'Azerbaiyán','Bakú, Ganyá, Sumqayit'																						
UNION SELECT 'Bahamas','Nasáu, Freeport, West End'																						
UNION SELECT 'Bangladés','Daca, Chittagong, Khulna'																						
UNION SELECT 'Barbados','Bridgetown'																						
UNION SELECT 'Baréin','Manama, Riffa, Muharraq'																						
UNION SELECT 'Belarús','Minsk, Gómel, Maguilov'																						
UNION SELECT 'Bélgica','Bruselas, Amberes, Gante'																						
UNION SELECT 'Belice','Belmopán, Ciudad de Belice'																						
UNION SELECT 'Benín','Porto Novo, Cotonú, Parakou'																						
UNION SELECT 'Bután','Thimbu, Phuntsholing'																						
UNION SELECT 'Bolivia','Sucre, La Paz, Santa Cruz'																						
UNION SELECT 'Bosnia y Herzegovina','Sarajevo, Banja Luka, Mostar'																						
UNION SELECT 'Botsuana','Gaborone, Francistown, Molepolole'																						
UNION SELECT 'Brasil','São Paulo, Río de Janeiro, Brasilia'																						
UNION SELECT 'Brunéi','Bandar Seri Begawan'																						
UNION SELECT 'Bulgaria','Sofía, Plovdiv, Varna'																						
UNION SELECT 'Burkina Faso','Uagadugú, Bobo-Dioulasso'																						
UNION SELECT 'Burundi','Buyumbura, Gitega'																						
UNION SELECT 'Cabo Verde','Praia, Mindelo'																						
UNION SELECT 'Camboya','Nom Pen, Battambang, Siem Reap'																						
UNION SELECT 'Camerún','Yaundé, Duala, Bafoussam'																						
UNION SELECT 'Canadá','Toronto, Vancouver, Montreal'																						
UNION SELECT 'Catar','Doha, Al Rayyan'																						
UNION SELECT 'Chad','Yamena, Moundou'																						
UNION SELECT 'Chile','Santiago, Valparaíso, Concepción'																						
UNION SELECT 'China','Pekín, Shanghái, Guangzhou'																						
UNION SELECT 'Chipre','Nicosia, Limassol, Lárnaca'																						
UNION SELECT 'Colombia','Bogotá, Medellín, Cali'																						
UNION SELECT 'Comoras','Moroni'																						
UNION SELECT 'Congo','Brazzaville, Pointe-Noire'																						
UNION SELECT 'Costa Rica','San José, Alajuela, Cartago'																						
UNION SELECT 'Croacia','Zagreb, Split, Rijeka'																						
UNION SELECT 'Cuba','La Habana, Santiago de Cuba, Camagüey'																						
UNION SELECT 'Dinamarca','Copenhague, Aarhus, Odense'																						
UNION SELECT 'Dominica','Roseau'																						
UNION SELECT 'Ecuador','Quito, Guayaquil, Cuenca'																						
UNION SELECT 'Egipto','El Cairo, Alejandría, Guiza'																						
UNION SELECT 'El Salvador','San Salvador, Santa Ana, San Miguel'																						
UNION SELECT 'Emiratos Árabes Unidos','Dubái, Abu Dabi, Sharjah'																						
UNION SELECT 'Eritrea','Asmara'																						
UNION SELECT 'Eslovaquia','Bratislava, Košice'																						
UNION SELECT 'Eslovenia','Liubliana, Maribor, Celje'																						
UNION SELECT 'España','Madrid, Barcelona, Valencia'																						
UNION SELECT 'Estados Unidos','New York, Los Ángeles, Chicago, Miami'																						
UNION SELECT 'Estonia','Tallin, Tartu, Narva'																						
UNION SELECT 'Etiopía','Adís Abeba, Gondar, Dire Dawa'																						
UNION SELECT 'Fiyi','Suva'																						
UNION SELECT 'Filipinas','Manila, Cebú, Dávao'																						
UNION SELECT 'Finlandia','Helsinki, Espoo, Tampere'																						
UNION SELECT 'Francia','París, Marsella, Lyon'																						
UNION SELECT 'Gabón','Libreville, Port-Gentil'																						
UNION SELECT 'Gambia','Banjul'																						
UNION SELECT 'Georgia','Tiflis, Kutaisi, Batumi'																						
UNION SELECT 'Ghana','Acra, Kumasi, Tamale'																						
UNION SELECT 'Grecia','Atenas, Tesalónica, Patras'																						
UNION SELECT 'Granada','Saint GeorgeS'																						
UNION SELECT 'Guatemala','Ciudad de Guatemala, Mixco, Quetzaltenango'																						
UNION SELECT 'Guinea','Conakri, Nzérékoré, Kankan'																						
UNION SELECT 'Guinea Ecuatorial','Malabo, Bata'																						
UNION SELECT 'Guinea-Bisáu','Bisáu'																						
UNION SELECT 'Guyana','Georgetown, Linden, New Amsterdam'																						
UNION SELECT 'Haití','Puerto Príncipe'																						
UNION SELECT 'Honduras','Tegucigalpa, San Pedro Sula, Choloma'																						
UNION SELECT 'Hungría','Budapest, Debrecen, Szeged'																						
UNION SELECT 'India','Bombay, Delhi, Bangalore'																						
UNION SELECT 'Indonesia','Yakarta, Surabaya, Bandung'																						
UNION SELECT 'Irán','Teherán, Mashhad, Isfahán'																						
UNION SELECT 'Irak','Bagdad, Mosul, Basora'																						
UNION SELECT 'Irlanda','Dublín, Cork, Galway'																						
UNION SELECT 'Islandia','Reikiavik, Kópavogur, Hafnarfjörður'																						
UNION SELECT 'Islas Marshall','Majuro'																						
UNION SELECT 'Islas Salomón','Honiara'																						
UNION SELECT 'Israel','Jerusalén, Tel Aviv, Haifa'																						
UNION SELECT 'Italia','Roma, Milán, Nápoles'																						
UNION SELECT 'Jamaica','Kingston, Spanish Town, Portmore'																						
UNION SELECT 'Japón','Tokio, Yokohama, Osaka'																						
UNION SELECT 'Jordania','Amán, Zarqa, Irbid'																						
UNION SELECT 'Kazajistán','Astaná, Almaty, Shymkent'																						
UNION SELECT 'Kenia','Nairobi, Mombasa, Kisumu'																						
UNION SELECT 'Kirguistán','Biskek, Osh, Jalal-Abad'																						
UNION SELECT 'Kiribati','Tarawa'																						
UNION SELECT 'Kuwait','Ciudad de Kuwait, Salmiya, Hawalli'																						
UNION SELECT 'Laos','Vientián, Savannakhet, Pakse'																						
UNION SELECT 'Lesoto','Maseru'																						
UNION SELECT 'Letonia','Riga, Daugavpils, Liep?ja'																						
UNION SELECT 'Líbano','Beirut, Trípoli, Sidón'																						
UNION SELECT 'Liberia','Monrovia, Gbarnga, Kakata'																						
UNION SELECT 'Libia','Trípoli, Bengasi, Misrata'																						
UNION SELECT 'Liechtenstein','Vaduz, Schaan'																						
UNION SELECT 'Lituania','Vilna, Kaunas, Klaip?da'																						
UNION SELECT 'Luxemburgo','Luxemburgo, Esch-sur-Alzette'																						
UNION SELECT 'Macedonia del Norte','Skopie, Bitola, Kumanovo'																						
UNION SELECT 'Madagascar','Antananarivo, Toamasina, Antsirabe'																						
UNION SELECT 'Malasia','Kuala Lumpur, George Town, Johor Bahru'																						
UNION SELECT 'Malaui','Lilongüe, Blantyre, Mzuzu'																						
UNION SELECT 'Maldivas','Malé'																						
UNION SELECT 'Malí','Bamako, Sikasso, Mopti'																						
UNION SELECT 'Malta','La Valeta, Birkirkara, Qormi'																						
UNION SELECT 'Marruecos','Casablanca, Rabat, Fez'																						
UNION SELECT 'Mauricio','Port Louis, Beau Bassin-Rose Hill, Curepipe'																						
UNION SELECT 'Mauritania','Nuakchot, Nouadhibou, Rosso'																						
UNION SELECT 'México','Ciudad de México, Guadalajara, Monterrey'																						
UNION SELECT 'Micronesia','Palikir'																						
UNION SELECT 'Moldavia','Chisináu, Tiraspol, B?l?i'																						
UNION SELECT 'Mónaco','Mónaco'																						
UNION SELECT 'Mongolia','Ulán Bator, Erdenet, Darkhan'																						
UNION SELECT 'Montenegro','Podgorica, Nikši?, Pljevlja'																						
UNION SELECT 'Mozambique','Maputo, Matola, Beira'																						
UNION SELECT 'Birmania/Myanmar','Naipyidó, Rangún, Mandalay'																						
UNION SELECT 'Namibia','Windhoek, Rundu, Walvis Bay'																						
UNION SELECT 'Nauru','Yaren'																						
UNION SELECT 'Nepal','Katmandú, Pokhara, Patan'																						
UNION SELECT 'Nicaragua','Managua, León, Masaya'																						
UNION SELECT 'Níger','Niamey, Zinder, Maradi'																						
UNION SELECT 'Nigeria','Lagos, Kano, Ibadan'																						
UNION SELECT 'Noruega','Oslo, Bergen, Trondheim'																						
UNION SELECT 'Nueva Zelanda','Auckland, Wellington, Christchurch'																						
UNION SELECT 'Omán','Mascate, Salalah, Nizwa'																						
UNION SELECT 'Países Bajos','Ámsterdam, Róterdam, La Haya'																						
UNION SELECT 'Pakistán','Karachi, Lahore, Faisalabad'																						
UNION SELECT 'Palaos','Ngerulmud'																						
UNION SELECT 'Panamá','Ciudad de Panamá, San Miguelito, Colón'																						
UNION SELECT 'Papúa Nueva Guinea','Port Moresby, Lae, Mount Hagen'																						
UNION SELECT 'Paraguay','Asunción, Ciudad del Este, Luque'																						
UNION SELECT 'Perú','Lima, Arequipa, Trujillo'																						
UNION SELECT 'Polonia','Varsovia, Cracovia, ?ód?'																						
UNION SELECT 'Portugal','Lisboa, Oporto, Vila Nova de Gaia'																						
UNION SELECT 'Reino Unido','Londres, Birmingham, Manchester'																						
UNION SELECT 'República Centroafricana','Bangui, Bimbo, Mbaïki'																						
UNION SELECT 'República Checa','Praga, Brno, Ostrava'																						
UNION SELECT 'República Democrática del Congo','Kinshasa, Lubumbashi, Mbuji-Mayi'																						
UNION SELECT 'República del Congo','Brazzaville, Pointe-Noire'																						
UNION SELECT 'República Dominicana','Santo Domingo, Santiago de los Caballeros, Santo Domingo Este'																						
UNION SELECT 'Rumania','Bucarest, Cluj-Napoca, Timi?oara'																						
UNION SELECT 'Rusia','Moscú, San Petersburgo, Novosibirsk'																						
UNION SELECT 'Ruanda','Kigali, Butare, Gitarama'																						
UNION SELECT 'San Cristóbal y Nieves','Basseterre, Charlestown'																						
UNION SELECT 'San Marino','Ciudad de San Marino, Serravalle, Borgo Maggiore'																						
UNION SELECT 'San Vicente y las Granadinas','Kingstown'																						
UNION SELECT 'Santa Lucía','Castries, Gros Islet, Vieux Fort'																						
UNION SELECT 'Santo Tomé y Príncipe','Santo Tomé, São João dos Angolares'																						
UNION SELECT 'Senegal','Dakar, Touba, Thiès'																						
UNION SELECT 'Serbia','Belgrado, Novi Sad, Niš'																						
UNION SELECT 'Seychelles','Victoria'																						
UNION SELECT 'Sierra Leona','Freetown, Bo, Kenema'																						
UNION SELECT 'Singapur','Singapur'																						
UNION SELECT 'Siria','Damasco, Alepo, Homs'																						
UNION SELECT 'Somalia','Mogadiscio, Hargeisa, Merca'																						
UNION SELECT 'Sri Lanka','Colombo, Sri Jayawardenepura Kotte, Kandy'																						
UNION SELECT 'Sudáfrica','Johannesburgo, Ciudad del Cabo, Durban'																						
UNION SELECT 'Sudán','Jartum, Omdurmán, Nyala'																						
UNION SELECT 'Sudán del Sur','Yuba, Malakal, Wau'																						
UNION SELECT 'Suecia','Estocolmo, Gotemburgo, Malmö'																						
UNION SELECT 'Suiza','Zúrich, Ginebra, Basilea'																						
UNION SELECT 'Surinam','Paramaribo, Lelydorp, Nieuw Nickerie'																						
UNION SELECT 'Tailandia','Bangkok, Nonthaburi, Nakhon Ratchasima'																						
UNION SELECT 'Tanzania','Dar es Salaam, Mwanza, Dodoma'																						
UNION SELECT 'Tayikistán','Dusambé, Khujand, Kulob'																						
UNION SELECT 'Timor Oriental','Dili, Baucau, Maliana'																						
UNION SELECT 'Togo','Lomé, Sokodé, Kara'																						
UNION SELECT 'Tonga','Nuku´alofa, Mu´a'																						
UNION SELECT 'Trinidad y Tobago','Puerto España, San Fernando, Chaguanas'																						
UNION SELECT 'Túnez','Túnez, Sfax, Susa'																						
UNION SELECT 'Turquía','Estambul, Ankara, Esmirna'																						
UNION SELECT 'Turkmenistán','Asjabad, Türkmenabat, Da?oguz'																						
UNION SELECT 'Tuvalu','Funafuti'																						
UNION SELECT 'Ucrania','Kiev, Járkov, Odesa'																						
UNION SELECT 'Uganda','Kampala, Gulu, Lira'																						
UNION SELECT 'Uruguay','Montevideo, Salto, Ciudad de la Costa'																						
UNION SELECT 'Uzbekistán','Taskent, Samarcanda, Namangán'																						
UNION SELECT 'Vanuatu','Port Vila, Luganville'																						
UNION SELECT 'Vietnam','Ciudad Ho Chi Minh, Hanói, H?i Phòng'																						
UNION SELECT 'Yemen','Saná, Adén, Taiz'																						
UNION SELECT 'Yibuti','Yibuti'																						
UNION SELECT 'Zambia','Lusaka, Kitwe, Ndola'																						
UNION SELECT 'Zimbabue','Harare, Bulawayo, Chitungwiza') PAISES INNER JOIN 
Nacionalidad_Nac ON Nac_Pais = PAISES.PAIS
OPEN cur_Paises

 

FETCH NEXT FROM cur_Paises INTO @Nac_Codigo, @Ciudades

WHILE @@FETCH_STATUS = 0
BEGIN
    DECLARE cur_CIUDAD CURSOR FOR
    SELECT value FROM STRING_SPLIT(@Ciudades, ',')

    OPEN cur_CIUDAD

    DECLARE @Ciudad VARCHAR(50)
    FETCH NEXT FROM cur_CIUDAD INTO @Ciudad

    WHILE @@FETCH_STATUS = 0
    BEGIN
        INSERT INTO Zona_Zon (Nac_Codigo, Zon_Nombre)
        VALUES (@Nac_Codigo, LTRIM(RTRIM(@Ciudad)))

        FETCH NEXT FROM cur_CIUDAD INTO @Ciudad
    END

    CLOSE cur_CIUDAD
    DEALLOCATE cur_CIUDAD

    FETCH NEXT FROM cur_Paises INTO @Nac_Codigo, @Ciudades
END

CLOSE cur_Paises
DEALLOCATE cur_Paises
 
 -- Base de Datos Venezuela
SELECT	'UNION SELECT ' + CAST(RowNumber AS VARCHAR(3)) + ','''+ 
		'' + PaisNombre + ''','+
		'''' + Nac_Nombre + ''','+
		'''' + iso2 + ''','+
		'''' + iso3 + ''','+
		'''' + phone_code + ''''
FROM (
SELECT	 
		ROW_NUMBER() OVER (ORDER BY Venezuela.dbo.Pais.PaisNombre) AS RowNumber, 
		Venezuela.dbo.Pais.PaisNombre, 
		dbo.Nacionalidad_Nac.Nac_Nombre, 
		Venezuela.dbo.paisesIdioma.iso2, 
		Venezuela.dbo.paisesIdioma.iso3, 
        Venezuela.dbo.paisesIdioma.phone_code
FROM            Venezuela.dbo.Pais INNER JOIN
                Venezuela.dbo.paisesIdioma ON Venezuela.dbo.Pais.PaisCodigo = Venezuela.dbo.paisesIdioma.iso3 INNER JOIN
                dbo.Nacionalidad_Nac ON Venezuela.dbo.paisesIdioma.nombre = dbo.Nacionalidad_Nac.Nac_Pais AND Venezuela.dbo.Pais.PaisNombre = dbo.Nacionalidad_Nac.Nac_Pais
 WHERE	iso2 = 'XX' 
 ) D

 insert into Ciudad (CiudadID, CiudadNombre, PaisCodigo, CiudadDistrito)
SELECT	5000 + ROW_NUMBER() OVER (ORDER BY ciudades.ciudad), 
		ciudades.ciudad, 'VEN', estados.estado 
FROM	estados INNER JOIN
		ciudades ON estados.id_estado = ciudades.id_estado



--INSERT INTO Zona_Zon (Zon_Nombre, Nac_Codigo)
SELECT DISTINCT Venezuela.dbo.Ciudad.CiudadDistrito, dbo.Nacion_Nac.Nac_Codigo
FROM            dbo.Nacion_Nac INNER JOIN
                         Venezuela.dbo.Ciudad ON dbo.Nacion_Nac.Nac_ISO3 = Venezuela.dbo.Ciudad.PaisCodigo
WHERE	PaisCodigo  IN ( SELECT NAC_ISO3 FROM dbo.Nacion_Nac )


--INSERT INTO Zona_Zon (Zon_Nombre, Nac_Codigo, Zon_CodigoPadre)
SELECT        Venezuela.dbo.Ciudad.CiudadNombre, dbo.Nacion_Nac.Nac_Codigo, dbo.Zona_Zon.Zon_Codigo 
FROM            dbo.Nacion_Nac INNER JOIN
                         Venezuela.dbo.Ciudad ON dbo.Nacion_Nac.Nac_ISO3 = Venezuela.dbo.Ciudad.PaisCodigo INNER JOIN
                         dbo.Zona_Zon ON dbo.Nacion_Nac.Nac_Codigo = dbo.Zona_Zon.Nac_Codigo AND Venezuela.dbo.Ciudad.CiudadDistrito = dbo.Zona_Zon.Zon_Nombre
WHERE        (dbo.Zona_Zon.Zon_ActCiu = 1)


select * from Zona_Zon where Zon_ActCiu = 1 and Zon_CodigoPadre is not null
select * from Zona_Zon where Zon_ActCiu = 1 and Zon_CodigoPadre is null
