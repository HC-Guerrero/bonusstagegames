\c bonus_stage_games;


INSERT INTO videogames (name, genre, platforms, esrb_rating, release_date, price, about, image) VALUES
('Starcraft', 'RTS', 'PC', 'T', 1996, 20, 'An epic rts game where the player assumes command of the tenacious and vicious Zerg, the resourceful and decentralized Terrans, and the technologically advanced and enigmatic Protoss.', 'https://thumbnails.pcgamingwiki.com/9/90/StarCraft_Cover.png/300px-StarCraft_Cover.png'),
('Command & Conquer Red Alert 2', 'RTS', 'PC', 'T', 2000, 0, 'An RTS that follows the events of a Cold War where World War 2 never happened, take control of either the American led Allies or the Russian led Soviets and lead your side to victory.', 'http://www.hardcoregaming101.net/wp-content/uploads/2018/11/335436-command-conquer-red-alert-2-windows-manual.jpg');
INSERT INTO users (name, photo, email, address, age, enrollment_date, membership, payment_info, password) VALUES
('Bob', 'https://static.tweaktown.com/news/7/4/74063_10_halo-infinites-sh-tty-graphics-make-craig-the-brute-an-internet-hero_full.png', 'bob1@gmail.com', '10-11-12th Grove Street', 32 , '01/01/2021', false, 4189609345129056, 'abcd1234'  ),
('Hank', 'https://static.tvtropes.org/pmwiki/pub/images/52b8dd8a_eff2_4ed2_9b8d_7c0039df1c53.jpg', 'PropaneKing@gmail.com', '33-76-08th Cul-de-Sac', 45 , '06/30/2018', true, 3459602845126701, 'NYC02AB'  );