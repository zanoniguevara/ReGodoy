DECLARE @Nac_Codigo INT
DECLARE @Ciudades VARCHAR(MAX)

DECLARE cur_Paises CURSOR FOR
SELECT Nac_Codigo, CIU FROM (
  SELECT 'Afganist�n' PAIS,'Kabul, Kandahar, Herat'CIU																				
UNION SELECT 'Albania','Tirana, Durr�s, Vlor�'																						
UNION SELECT 'Alemania','Berl�n, M�nich, Hamburgo'																						
UNION SELECT 'Andorra','Andorra la Vella, Escaldes-Engordany'																						
UNION SELECT 'Angola','Luanda, Huambo, Lobito'																						
UNION SELECT 'Antigua y Barbuda','Saint JohnS'																						
UNION SELECT 'Arabia Saudita','Riad, Yeda, La Meca'																						
UNION SELECT 'Argelia','Argel, Or�n, Constantina'																						
UNION SELECT 'Argentina','Buenos Aires, C�rdoba, Rosario'																						
UNION SELECT 'Armenia','Erev�n, Gyumri, Vanadzor'																						
UNION SELECT 'Australia','S�dney, Melbourne, Brisbane'																						
UNION SELECT 'Austria','Viena, Graz, Linz'																						
UNION SELECT 'Azerbaiy�n','Bak�, Gany�, Sumqayit'																						
UNION SELECT 'Bahamas','Nas�u, Freeport, West End'																						
UNION SELECT 'Banglad�s','Daca, Chittagong, Khulna'																						
UNION SELECT 'Barbados','Bridgetown'																						
UNION SELECT 'Bar�in','Manama, Riffa, Muharraq'																						
UNION SELECT 'Belar�s','Minsk, G�mel, Maguilov'																						
UNION SELECT 'B�lgica','Bruselas, Amberes, Gante'																						
UNION SELECT 'Belice','Belmop�n, Ciudad de Belice'																						
UNION SELECT 'Ben�n','Porto Novo, Coton�, Parakou'																						
UNION SELECT 'But�n','Thimbu, Phuntsholing'																						
UNION SELECT 'Bolivia','Sucre, La Paz, Santa Cruz'																						
UNION SELECT 'Bosnia y Herzegovina','Sarajevo, Banja Luka, Mostar'																						
UNION SELECT 'Botsuana','Gaborone, Francistown, Molepolole'																						
UNION SELECT 'Brasil','S�o Paulo, R�o de Janeiro, Brasilia'																						
UNION SELECT 'Brun�i','Bandar Seri Begawan'																						
UNION SELECT 'Bulgaria','Sof�a, Plovdiv, Varna'																						
UNION SELECT 'Burkina Faso','Uagadug�, Bobo-Dioulasso'																						
UNION SELECT 'Burundi','Buyumbura, Gitega'																						
UNION SELECT 'Cabo Verde','Praia, Mindelo'																						
UNION SELECT 'Camboya','Nom Pen, Battambang, Siem Reap'																						
UNION SELECT 'Camer�n','Yaund�, Duala, Bafoussam'																						
UNION SELECT 'Canad�','Toronto, Vancouver, Montreal'																						
UNION SELECT 'Catar','Doha, Al Rayyan'																						
UNION SELECT 'Chad','Yamena, Moundou'																						
UNION SELECT 'Chile','Santiago, Valpara�so, Concepci�n'																						
UNION SELECT 'China','Pek�n, Shangh�i, Guangzhou'																						
UNION SELECT 'Chipre','Nicosia, Limassol, L�rnaca'																						
UNION SELECT 'Colombia','Bogot�, Medell�n, Cali'																						
UNION SELECT 'Comoras','Moroni'																						
UNION SELECT 'Congo','Brazzaville, Pointe-Noire'																						
UNION SELECT 'Costa Rica','San Jos�, Alajuela, Cartago'																						
UNION SELECT 'Croacia','Zagreb, Split, Rijeka'																						
UNION SELECT 'Cuba','La Habana, Santiago de Cuba, Camag�ey'																						
UNION SELECT 'Dinamarca','Copenhague, Aarhus, Odense'																						
UNION SELECT 'Dominica','Roseau'																						
UNION SELECT 'Ecuador','Quito, Guayaquil, Cuenca'																						
UNION SELECT 'Egipto','El Cairo, Alejandr�a, Guiza'																						
UNION SELECT 'El Salvador','San Salvador, Santa Ana, San Miguel'																						
UNION SELECT 'Emiratos �rabes Unidos','Dub�i, Abu Dabi, Sharjah'																						
UNION SELECT 'Eritrea','Asmara'																						
UNION SELECT 'Eslovaquia','Bratislava, Ko�ice'																						
UNION SELECT 'Eslovenia','Liubliana, Maribor, Celje'																						
UNION SELECT 'Espa�a','Madrid, Barcelona, Valencia'																						
UNION SELECT 'Estados Unidos','New York, Los �ngeles, Chicago, Miami'																						
UNION SELECT 'Estonia','Tallin, Tartu, Narva'																						
UNION SELECT 'Etiop�a','Ad�s Abeba, Gondar, Dire Dawa'																						
UNION SELECT 'Fiyi','Suva'																						
UNION SELECT 'Filipinas','Manila, Ceb�, D�vao'																						
UNION SELECT 'Finlandia','Helsinki, Espoo, Tampere'																						
UNION SELECT 'Francia','Par�s, Marsella, Lyon'																						
UNION SELECT 'Gab�n','Libreville, Port-Gentil'																						
UNION SELECT 'Gambia','Banjul'																						
UNION SELECT 'Georgia','Tiflis, Kutaisi, Batumi'																						
UNION SELECT 'Ghana','Acra, Kumasi, Tamale'																						
UNION SELECT 'Grecia','Atenas, Tesal�nica, Patras'																						
UNION SELECT 'Granada','Saint GeorgeS'																						
UNION SELECT 'Guatemala','Ciudad de Guatemala, Mixco, Quetzaltenango'																						
UNION SELECT 'Guinea','Conakri, Nz�r�kor�, Kankan'																						
UNION SELECT 'Guinea Ecuatorial','Malabo, Bata'																						
UNION SELECT 'Guinea-Bis�u','Bis�u'																						
UNION SELECT 'Guyana','Georgetown, Linden, New Amsterdam'																						
UNION SELECT 'Hait�','Puerto Pr�ncipe'																						
UNION SELECT 'Honduras','Tegucigalpa, San Pedro Sula, Choloma'																						
UNION SELECT 'Hungr�a','Budapest, Debrecen, Szeged'																						
UNION SELECT 'India','Bombay, Delhi, Bangalore'																						
UNION SELECT 'Indonesia','Yakarta, Surabaya, Bandung'																						
UNION SELECT 'Ir�n','Teher�n, Mashhad, Isfah�n'																						
UNION SELECT 'Irak','Bagdad, Mosul, Basora'																						
UNION SELECT 'Irlanda','Dubl�n, Cork, Galway'																						
UNION SELECT 'Islandia','Reikiavik, K�pavogur, Hafnarfj�r�ur'																						
UNION SELECT 'Islas Marshall','Majuro'																						
UNION SELECT 'Islas Salom�n','Honiara'																						
UNION SELECT 'Israel','Jerusal�n, Tel Aviv, Haifa'																						
UNION SELECT 'Italia','Roma, Mil�n, N�poles'																						
UNION SELECT 'Jamaica','Kingston, Spanish Town, Portmore'																						
UNION SELECT 'Jap�n','Tokio, Yokohama, Osaka'																						
UNION SELECT 'Jordania','Am�n, Zarqa, Irbid'																						
UNION SELECT 'Kazajist�n','Astan�, Almaty, Shymkent'																						
UNION SELECT 'Kenia','Nairobi, Mombasa, Kisumu'																						
UNION SELECT 'Kirguist�n','Biskek, Osh, Jalal-Abad'																						
UNION SELECT 'Kiribati','Tarawa'																						
UNION SELECT 'Kuwait','Ciudad de Kuwait, Salmiya, Hawalli'																						
UNION SELECT 'Laos','Vienti�n, Savannakhet, Pakse'																						
UNION SELECT 'Lesoto','Maseru'																						
UNION SELECT 'Letonia','Riga, Daugavpils, Liep?ja'																						
UNION SELECT 'L�bano','Beirut, Tr�poli, Sid�n'																						
UNION SELECT 'Liberia','Monrovia, Gbarnga, Kakata'																						
UNION SELECT 'Libia','Tr�poli, Bengasi, Misrata'																						
UNION SELECT 'Liechtenstein','Vaduz, Schaan'																						
UNION SELECT 'Lituania','Vilna, Kaunas, Klaip?da'																						
UNION SELECT 'Luxemburgo','Luxemburgo, Esch-sur-Alzette'																						
UNION SELECT 'Macedonia del Norte','Skopie, Bitola, Kumanovo'																						
UNION SELECT 'Madagascar','Antananarivo, Toamasina, Antsirabe'																						
UNION SELECT 'Malasia','Kuala Lumpur, George Town, Johor Bahru'																						
UNION SELECT 'Malaui','Lilong�e, Blantyre, Mzuzu'																						
UNION SELECT 'Maldivas','Mal�'																						
UNION SELECT 'Mal�','Bamako, Sikasso, Mopti'																						
UNION SELECT 'Malta','La Valeta, Birkirkara, Qormi'																						
UNION SELECT 'Marruecos','Casablanca, Rabat, Fez'																						
UNION SELECT 'Mauricio','Port Louis, Beau Bassin-Rose Hill, Curepipe'																						
UNION SELECT 'Mauritania','Nuakchot, Nouadhibou, Rosso'																						
UNION SELECT 'M�xico','Ciudad de M�xico, Guadalajara, Monterrey'																						
UNION SELECT 'Micronesia','Palikir'																						
UNION SELECT 'Moldavia','Chisin�u, Tiraspol, B?l?i'																						
UNION SELECT 'M�naco','M�naco'																						
UNION SELECT 'Mongolia','Ul�n Bator, Erdenet, Darkhan'																						
UNION SELECT 'Montenegro','Podgorica, Nik�i?, Pljevlja'																						
UNION SELECT 'Mozambique','Maputo, Matola, Beira'																						
UNION SELECT 'Birmania/Myanmar','Naipyid�, Rang�n, Mandalay'																						
UNION SELECT 'Namibia','Windhoek, Rundu, Walvis Bay'																						
UNION SELECT 'Nauru','Yaren'																						
UNION SELECT 'Nepal','Katmand�, Pokhara, Patan'																						
UNION SELECT 'Nicaragua','Managua, Le�n, Masaya'																						
UNION SELECT 'N�ger','Niamey, Zinder, Maradi'																						
UNION SELECT 'Nigeria','Lagos, Kano, Ibadan'																						
UNION SELECT 'Noruega','Oslo, Bergen, Trondheim'																						
UNION SELECT 'Nueva Zelanda','Auckland, Wellington, Christchurch'																						
UNION SELECT 'Om�n','Mascate, Salalah, Nizwa'																						
UNION SELECT 'Pa�ses Bajos','�msterdam, R�terdam, La Haya'																						
UNION SELECT 'Pakist�n','Karachi, Lahore, Faisalabad'																						
UNION SELECT 'Palaos','Ngerulmud'																						
UNION SELECT 'Panam�','Ciudad de Panam�, San Miguelito, Col�n'																						
UNION SELECT 'Pap�a Nueva Guinea','Port Moresby, Lae, Mount Hagen'																						
UNION SELECT 'Paraguay','Asunci�n, Ciudad del Este, Luque'																						
UNION SELECT 'Per�','Lima, Arequipa, Trujillo'																						
UNION SELECT 'Polonia','Varsovia, Cracovia, ?�d?'																						
UNION SELECT 'Portugal','Lisboa, Oporto, Vila Nova de Gaia'																						
UNION SELECT 'Reino Unido','Londres, Birmingham, Manchester'																						
UNION SELECT 'Rep�blica Centroafricana','Bangui, Bimbo, Mba�ki'																						
UNION SELECT 'Rep�blica Checa','Praga, Brno, Ostrava'																						
UNION SELECT 'Rep�blica Democr�tica del Congo','Kinshasa, Lubumbashi, Mbuji-Mayi'																						
UNION SELECT 'Rep�blica del Congo','Brazzaville, Pointe-Noire'																						
UNION SELECT 'Rep�blica Dominicana','Santo Domingo, Santiago de los Caballeros, Santo Domingo Este'																						
UNION SELECT 'Rumania','Bucarest, Cluj-Napoca, Timi?oara'																						
UNION SELECT 'Rusia','Mosc�, San Petersburgo, Novosibirsk'																						
UNION SELECT 'Ruanda','Kigali, Butare, Gitarama'																						
UNION SELECT 'San Crist�bal y Nieves','Basseterre, Charlestown'																						
UNION SELECT 'San Marino','Ciudad de San Marino, Serravalle, Borgo Maggiore'																						
UNION SELECT 'San Vicente y las Granadinas','Kingstown'																						
UNION SELECT 'Santa Luc�a','Castries, Gros Islet, Vieux Fort'																						
UNION SELECT 'Santo Tom� y Pr�ncipe','Santo Tom�, S�o Jo�o dos Angolares'																						
UNION SELECT 'Senegal','Dakar, Touba, Thi�s'																						
UNION SELECT 'Serbia','Belgrado, Novi Sad, Ni�'																						
UNION SELECT 'Seychelles','Victoria'																						
UNION SELECT 'Sierra Leona','Freetown, Bo, Kenema'																						
UNION SELECT 'Singapur','Singapur'																						
UNION SELECT 'Siria','Damasco, Alepo, Homs'																						
UNION SELECT 'Somalia','Mogadiscio, Hargeisa, Merca'																						
UNION SELECT 'Sri Lanka','Colombo, Sri Jayawardenepura Kotte, Kandy'																						
UNION SELECT 'Sud�frica','Johannesburgo, Ciudad del Cabo, Durban'																						
UNION SELECT 'Sud�n','Jartum, Omdurm�n, Nyala'																						
UNION SELECT 'Sud�n del Sur','Yuba, Malakal, Wau'																						
UNION SELECT 'Suecia','Estocolmo, Gotemburgo, Malm�'																						
UNION SELECT 'Suiza','Z�rich, Ginebra, Basilea'																						
UNION SELECT 'Surinam','Paramaribo, Lelydorp, Nieuw Nickerie'																						
UNION SELECT 'Tailandia','Bangkok, Nonthaburi, Nakhon Ratchasima'																						
UNION SELECT 'Tanzania','Dar es Salaam, Mwanza, Dodoma'																						
UNION SELECT 'Tayikist�n','Dusamb�, Khujand, Kulob'																						
UNION SELECT 'Timor Oriental','Dili, Baucau, Maliana'																						
UNION SELECT 'Togo','Lom�, Sokod�, Kara'																						
UNION SELECT 'Tonga','Nuku�alofa, Mu�a'																						
UNION SELECT 'Trinidad y Tobago','Puerto Espa�a, San Fernando, Chaguanas'																						
UNION SELECT 'T�nez','T�nez, Sfax, Susa'																						
UNION SELECT 'Turqu�a','Estambul, Ankara, Esmirna'																						
UNION SELECT 'Turkmenist�n','Asjabad, T�rkmenabat, Da?oguz'																						
UNION SELECT 'Tuvalu','Funafuti'																						
UNION SELECT 'Ucrania','Kiev, J�rkov, Odesa'																						
UNION SELECT 'Uganda','Kampala, Gulu, Lira'																						
UNION SELECT 'Uruguay','Montevideo, Salto, Ciudad de la Costa'																						
UNION SELECT 'Uzbekist�n','Taskent, Samarcanda, Namang�n'																						
UNION SELECT 'Vanuatu','Port Vila, Luganville'																						
UNION SELECT 'Vietnam','Ciudad Ho Chi Minh, Han�i, H?i Ph�ng'																						
UNION SELECT 'Yemen','San�, Ad�n, Taiz'																						
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
