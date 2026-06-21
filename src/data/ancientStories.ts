/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AncientStory {
  id: string;
  title: string;
  category: "all" | "focus" | "devotion" | "mindfulness" | "wisdom" | "breath";
  source: string;
  lesson: string;
  character: string;
  content: string;
}

export const ANCIENT_STORIES: AncientStory[] = [
  {
    id: "shiva_halahala",
    title: "Shiva and the Ocean of Poison",
    category: "breath",
    source: "Puranas",
    lesson: "Breath holding and keeping toxic ideas from corrupting your heart.",
    character: "Lord Shiva",
    content: "During the legendary churning of the ocean, a deadly blue venom called Halahala emerged, threatening to extinguish all celestial and earthly life. Lord Shiva came forward and gathered the poison in his palms. By employing an extraordinary, steady pranayama lock and locking his throat muscles (Vishuddha Chakra), he held the poison safely in his throat, refusing to let it enter his body or escape back into the world. His neck turned beautifully blue, gaining him the name Neelakantha. This classic story teaches how conscious self-containment, slow breathing, and high mental fortitude prevent outside toxicity from poisoning your inner peace."
  },
  {
    id: "saviti_yama",
    title: "Savitri and the Lord of Death",
    category: "devotion",
    source: "Mahabharata",
    lesson: "Unyielding focal resolve (Sankalpa) that bends time and destiny.",
    character: "Savitri",
    content: "When Princess Savitri's husband Satyavan passed away, Yama, the terrifying Lord of Death, came to take his soul. Refusing to succumb to sorrow, Savitri followed Yama down the dark path to the underworld. Yama was astounded by her serene fearlessness, deep philosophical focus, and continuous respectful prayers. Impressed by her undiverted devotion and sheer power of concentration, Yama granted her multiple wishes, eventually returning Satyavan's life force. Her story is a testament to the fact that single-minded devotion and unshakeable resolve can overcome even the most unyielding laws of physical limits."
  },
  {
    id: "nachiketa_yama",
    title: "Nachiketa's Query to Death",
    category: "wisdom",
    source: "Katha Upanishad",
    lesson: "Sincere query of truth above all floating material attachments.",
    character: "Nachiketa",
    content: "A young boy named Nachiketa was sent to the abode of Yama, the Lord of Death. Impressed by the child's patient wait of three days, Yama offered him three massive boons. Nachiketa did not ask for long life, infinite gold, or celestial kingdoms; instead, he demanded the secret of what lies beyond death. Yama tried to tempt him with beautiful visual palaces and material pleasures, yet the boy's attention remained completely unmoved. Nachiketa's unyielding focus forced Yama to reveal the ultimate wisdom of the immortal Soul (Atman), showing how only those who filter out superficial temptations can realize the highest truth."
  },
  {
    id: "eklavya_statue",
    title: "Eklavya's Mud Teacher",
    category: "focus",
    source: "Mahabharata",
    lesson: "Sincere self-taught focus can transcend conventional systemic boundaries.",
    character: "Eklavya",
    content: "A tribal boy named Eklavya wished to learn archery from the royal guru Dronacharya, but was refused due to his social status. Undeterred, Eklavya returned to the deep forest, built a clay statue of Dronacharya, and began practicing archery with absolute devotion. By keeping his eyes, hands, and mind lock-focused on his targets, he attained a level of hunting mastery that surpassed even the royal prince Arjuna. His incredible discipline shows that external approval is not a prerequisite to mastery; the true teacher resides in your own dedicated, uninterrupted daily practice."
  },
  {
    id: "arjuna_bird",
    title: "Arjuna and the Target Bird's Eye",
    category: "focus",
    source: "Mahabharata",
    lesson: "Complete elimination of surrounding background visual noise.",
    character: "Arjuna",
    content: "During a royal military test, Guru Dronacharya placed a wooden bird on a high branch and asked each prince to aim for its eye. Before releasing the arrow, he asked, 'What do you see?' The princes answered that they saw the beautiful branches, the green leaves, the sky, and the bird. When it was Arjuna’s turn, he replied, 'I see only the circular black pupil of the bird's eye. I do not see the leaves, the branch, or even the bird’s body.' His arrow flew straight, striking the tiny target perfectly. This demonstrates how absolute focus requires editing out all secondary surroundings."
  },
  {
    id: "janaka_milk",
    title: "King Janaka's Cup of Milk",
    category: "mindfulness",
    source: "Upanishad folklore",
    lesson: "Living actively in the busy world with a completely centered attention.",
    character: "King Janaka",
    content: "A proud scholar visited King Janaka, wondering how a rich king living in a sensory palace could also be a fully realized sage. Janaka smiled and handed the scholar a cup filled to the absolute brim with fresh warm milk. He instructed him to walk through the crowded palace gardens, dancers, and treasures, but warned that if a single drop spilled, the royal guards would execute him. The scholar completed the walk without spilling a drop. When Janaka asked what beautiful dancers or riches he saw, the scholar replied, 'I saw nothing but the edge of my cup.' Janaka explained that is how he lives—active in a kingdom, yet focused on the soul."
  },
  {
    id: "astavakra_assembly",
    title: "Astavakra's Laughing Sages",
    category: "wisdom",
    source: "Astavakra Gita",
    lesson: "Realizing that outer forms are mere mud, and truth lies inside.",
    character: "Sage Astavakra",
    content: "Young Astavakra, whose somatic body was bent in eight places, entered the royal court of King Janaka. Seeing his physical shape, all the wise scholars erupted in laughter. Astavakra did not feel insulted; instead, he laughed even louder. When the King asked why he laughed, Astavakra replied, 'I thought I was entering an assembly of enlightened souls, but I find I am in a gathering of shoemakers who can judge only the outer skin and leather, completely blind to the beautiful soul within.' The court fell silent in deep shame. This story teaches us to look past physical shapes and anchors our focus on internal presence."
  },
  {
    id: "kabir_thread",
    title: "Kabir and the Unbroken Thread",
    category: "mindfulness",
    source: "Medieval folklore",
    lesson: "Turning domestic daily handwork into continuous divine chanting.",
    character: "Sant Kabir",
    content: "Kabir was a humble weaver who spent his days spinning cotton threads. While other priests shouted long scriptures, Kabir spun his loom while quietly humming simple rhythm prayers. He treated every single thread he handled with profound respect, pretending he was weaving a digital-grade garment for the creator itself. Sages noted his mind was so completely focused on the simple repetition of weaving and sound that his tension disappeared and his face glowed with peace. He proved that you don't need to flee your home or job; any simple daily activity done with love is meditation."
  },
  {
    id: "narada_oil_vessel",
    title: "Narada and the Vessel of Oil",
    category: "mindfulness",
    source: "Puranas",
    lesson: "Balancing worldly duties while maintaining a silent background prayer.",
    character: "Sage Narada",
    content: "Sage Narada once boasted that he was the absolute peak devotee of the universe. To teach him humility, Lord Vishnu asked him to carry a shallow bowl filled with oil around a bustling city without spilling a drop. Narada focused intensely and returned with the oil intact. Vishnu then asked, 'How many times did you remember me during your walk?' Narada admitted, 'Not once, my mind was too busy watching the oil!' Vishnu pointed out a simple farmer who plowed his fields while gently chanting the divine name on every breath. Narada realized that true sādhanā is maintaining inner awareness amidst outer actions."
  },
  {
    id: "samudra_manthan",
    title: "The Churning of the Ocean",
    category: "breath",
    source: "Puranas",
    lesson: "Pacing the twin forces of inhalation and exhalation rhythmically.",
    character: "Devas and Asuras",
    content: "In ancient lore, the Devas and Asuras joined hands to churn the vast Cosmic Ocean to retrieve the nectar of immortality. They wrapped the giant serpent Vasuki around Mount Mandara, pulling on opposite sides. The pulling represents the dual currents of human breathing (Ida and Pingala). The massive mountain began to sink, but Lord Vishnu took the form of a steady turtle to support the base. This beautiful story teaches that to churn the depths of your mind and retrieve peace, you must find a steady center and pace your breathing rhythmically without letup."
  },
  {
    id: "markandeya_time",
    title: "Markandeya's Victory over Time",
    category: "devotion",
    source: "Markandeya Purana",
    lesson: "Constant centering on eternal sound conquers the fear of death.",
    character: "Sage Markandeya",
    content: "Markandeya was a young saint destined to leave his body at the age of sixteen. When the fateful day arrived, the fearsome agents of Yama approached him. Rather than fleeing, the boy wrapped his arms around the Shiva Lingam, chanting the Mahamrityunjaya Mantra with absolute concentration. When the rope of death was thrown, it struck both the boy and the stone pillar. Shiva emerged from the pillar, defeating Yama’s grip and granting Markandeya eternal youth. His tale teaches that wrapping your awareness around an unmoving spiritual anchor renders you immune to passing temporal worries."
  },
  {
    id: "ganesha_pradakshina",
    title: "Ganesha and the Root Circle",
    category: "wisdom",
    source: "Puranas",
    lesson: "Realizing the central source is wiser than traveling outer loops.",
    character: "Lord Ganesha",
    content: "Siddhartha-like Kartikeya and Ganesha were challenged to race around the entire universe to win a sacred mango. Kartikeya mounted his swift peacock and soared across galaxies, visiting every cosmic star and river. Ganesha, who had a heavy body, smiled. He slowly walked three times around his parents, Shiva and Parvati, and claimed the prize. When Kartikeya returned exhausted, Ganesha explained: 'The Vedas declare that the parents are the root source of the entire cosmos. Circling the source is equivalent to circling everything.' This story shows that focusing on the root of awareness is far wiser than running after infinite outer distractions."
  },
  {
    id: "bhagiratha_ganges",
    title: "Bhagiratha's Torrential Focus",
    category: "focus",
    source: "Puranas",
    lesson: "Generational persistence that forces a cosmic flow downward.",
    character: "King Bhagiratha",
    content: "To wash away the ashes and clear the karmic blockages of his ancestors, King Bhagiratha had to bring down the celestial River Ganges from the stars. He sat in extreme focus (Tapas) for thousands of years, refusing comfort. When the river agreed, she warned that her falling speed would smash the Earth. Bhagiratha turned his focus to Shiva, chanting till the Lord agreed to capture the torrential water in his locks. His unyielding focus teaches that through deep persistence, we can summon a massive flow of clarity to dry, barren areas of our life."
  },
  {
    id: "shravan_devotion",
    title: "Shravan Kumar's Loving Balance",
    category: "devotion",
    source: "Ramayana",
    lesson: "Carrying physical burdens with joy when dedicated to love.",
    character: "Shravan Kumar",
    content: "Shravan Kumar’s elderly parents were completely blind and wished to visit the standard holy places of India. Being very poor, Shravan built a simple scale basket (Kavadi), placed his father in one end and his mother in the other, and carried them on his shoulders for hundreds of miles. He kept his balance steady, his feet soft, and his breath quiet on every step, chanting to keep his frame energized. His legendary narrative shows that when our physical duties are performed with absolute devotion and a chanting heart, the heavy burden turns into an effortless act of joy and worship."
  },
  {
    id: "shabari_berries",
    title: "Shabari's Sweet Tasting",
    category: "devotion",
    source: "Ramayana",
    lesson: "Patient, loving waiting that sweetens every daily deed.",
    character: "Shabari",
    content: "Shabari was an elderly forest dweller who spent decades waiting for the arrival of Prince Rama. Loving and simple, her daily sādhanā was sweeping the forest dirt paths, collecting fresh wild flowers, and gathering berries. To ensure the prince would never receive a sour fruit, she tasted every single berry herself, keeping only the sweet ones. When Rama finally arrived, he bypassed high royal temples to visit her, happily eating the half-bitten sweet berries. Her story teaches us that the quality of our quiet devotion and patient waiting carries far more value than grand, cold routines."
  },
  {
    id: "ashtavakra_bends",
    title: "Ashtavakra's Straight Mind",
    category: "wisdom",
    source: "Astavakra Gita",
    lesson: "The physical container can bend, but the inner self stays straight.",
    character: "Sage Ashtavakra",
    content: "Ashtavakra had 8 severe bends in his bones, making his posture crooked. Sages around him sat in perfect tall cross-legged styles, boasting of their posture. Ashtavakra spoke of the Atman: 'Does a crooked river bend the water? Does a crooked temple cup bend the space inside?' Hearing this, King Janaka realized that the outer container can twist, but the silent observer within remains completely flawless, spacious, and straight. This story reminds us of our true nature when our outer life gets chaotic."
  },
  {
    id: "dattatreya_gurus",
    title: "Dattatreya's Twenty-Four Teachers",
    category: "mindfulness",
    source: "Bhagavata Purana",
    lesson: "Finding quiet lessons in every natural creature around us.",
    character: "Sage Dattatreya",
    content: "Sage Dattatreya lived in absolute bliss. When a king asked who taught him such deep peace, he revealed he had 24 teachers. He learned focus from a spider weaving threads, silence from the vast sky, fluidity from a running river, patience from the heavy earth, and focus from an arrow-smith who was so absorbed in hammering metal that he didn't even notice a royal parade walk past. His tale shows that if the heart is awake and quiet, the entire universe is a continuous masterclass of meditation."
  },
  {
    id: "angulimala_peace",
    title: "Angulimala and the Untouchable Grace",
    category: "focus",
    source: "Buddhist Lore",
    lesson: "Absolute inner peace that completely silences an outer storm.",
    character: "Gautama Buddha",
    content: "The violent bandit Angulimala, who wore a necklace of fingers taken from victims, spotted the Buddha walking through his forest. He shouted for him to freeze, running with a raised sword. The Buddha continued walking calmly, matching his steps with slow breathing. No matter how fast Angulimala ran, his heavy, angry lungs left him exhausted, unable to catch up to the serene monk. Puzzled, he yelled, 'Why cannot I catch you?' Buddha stopped and smiled: 'I stopped running from my shadow long ago, I am still. It is you who are running.' The bandit dropped his sword in tears, finding immediate calm."
  },
  {
    id: "maitreyi_immortal",
    title: "Maitreyi's Refusal of Wealth",
    category: "wisdom",
    source: "Brihadaranyaka Upanishad",
    lesson: "Refusing physical security for eternal, quiet freedom.",
    character: "Maitreyi",
    content: "Sage Yajnavalkya wished to divide his massive material lands and cattle between his wives. Maitreyi, who was highly meditative, looked at him and asked, 'If this entire earth filled with gold were mine, would I become immortal?' Yajnavalkya replied, 'No, you would live like a rich person, but wealth cannot buy death-free peace.' Maitreyi pushed away the gold: 'What shall I do with that which cannot lead me to the immortal?' This story inspires us to prioritize real, quiet, inner stability above temporary physical treasures."
  },
  {
    id: "sabyashachi_hands",
    title: "Arjuna the Double-Handed Archer",
    category: "focus",
    source: "Mahabharata",
    lesson: "Balanced cerebral flow that excels in all situations.",
    character: "Arjuna (Sabyashachi)",
    content: "Arjuna was also called Sabyashachi because he could pull his bowstring and shoot targets with equal speed and pinpoint precision using either his left or his right hand. He trained both hands to act without bias, balancing his breath with his muscle pulls. This story teaches the value of finding perfect balance inside our daily lives—integrating our active outer work (right hand) with our deep, quiet inner meditation (left hand) to flow smoothly through existence."
  },
  {
    id: "pippalada_leaves",
    title: "Pippalada and the Fig Tree",
    category: "wisdom",
    source: "Prashna Upanishad",
    lesson: "Patient, quiet study of nature's simple cycles.",
    character: "Sage Pippalada",
    content: "Pippalada was a young boy who sat beneath a sacred Pippala (fig) tree, surviving purely on the falling seeds. He watched the green leaves sprout, turn yellow, fall back into the soil, and nourish the roots, realizing that all human suffering is a natural cycle of growth and decay. His quiet, focused observations led him to answer six deep philosophical questions about energy (Prana) and consciousness, showing that sitting quietly and watching nature with patience reveals the deepest laws of reality."
  },
  {
    id: "upamanyu_milk",
    title: "Upamanyu's Mud Ocean",
    category: "devotion",
    source: "Shiva Purana",
    lesson: "Innocent, sweet dedication converts mud into nectar.",
    character: "Upamanyu",
    content: "A poor boy named Upamanyu had never tasted real milk. His mother, unable to afford it, gave him clean flour mixed in water. When he tasted real milk at a relative's house, he realized his mother's plight and ran to the forest to pray to Shiva for milk. The young boy locked his mind onto the Panchakshara ('Om Namah Shivaya'), ignoring his hunger. Impressed, Shiva appeared and turned the surrounding muddy forest springs into an infinite Ocean of sweet Milk. This story shows that matching sincere, sweet intent with clear focus sweetens our worst situations."
  },
  {
    id: "shukadeva_oil",
    title: "Shukadeva's Royal Senses Test",
    category: "mindfulness",
    source: "Bhagavata Purana",
    lesson: "Carrying a full cup of focus through life's sensory temples.",
    character: "Sage Shukadeva",
    content: "To test young Shukadeva's readiness, King Janaka gave him a flat bowl filled to the brim with slippery oil and told him to circle his grand castle thrice. Dancers danced, drummers beat loud skin drums, and sweet incense burned. Shukadeva walked with majestic poise, his eyes locked onto the oil's surface, and completed the loop with every single drop safe. He showed that a trained mind can enjoy and exist amidst the most chaotic sensory environments of the modern world without losing its central, clean balance."
  },
  {
    id: "harishchandra_truth",
    title: "Harishchandra and the Undying Pledge",
    category: "focus",
    source: "Markandeya Purana",
    lesson: "Aligning with your core principles regardless of passing storms.",
    character: "King Harishchandra",
    content: "King Harishchandra lost his throne, his family, and his pride, ending up working as a humble helper in a dark burning ghat. Yet, under every terrifying situation, he refused to tell a lie or break his promise. His unbending focus on absolute truthfulness (Satya) eventually forced the elements to restore his kingdom and respect. His story shows that holding on to your core virtues during dark, chaotic times is the highest form of character meditation."
  },
  {
    id: "buddha_water",
    title: "The Buddha and the Muddy Stream",
    category: "mindfulness",
    source: "Buddhist Lore",
    lesson: "Allowing active minds to settle naturally by waiting.",
    character: "Gautama Buddha",
    content: "While traveling, Buddha asked his disciple Ananda to fetch water from a small stream. Ananda found that a cart had just crossed, leaving the water muddy. He returned empty-handed. Buddha told him to wait a while, sit quietly, and go back. Ananda returned to the stream later and found the mud had naturally settled to the bottom, leaving the water pristine and crystal clear. Buddha smiled: 'Your mind is just like that. When it gets chaotic, do not force it to quiet down. Simply sit, breathe, wait, and it settles on its own.'"
  },
  {
    id: "bodhidharma_wall",
    title: "Bodhidharma's Nine-Year Wall-Stare",
    category: "focus",
    source: "Zen Folklore",
    lesson: "Consistent, silent focus that clears the busy mind.",
    character: "Bodhidharma",
    content: "Bodhidharma, who carried Zen from India to Shaolin, sat before a blank stone wall in a cave, staring at it silently for nine years. He ignored the passing winters, summer heat, and the curious forest creatures. By keeping his eyes open and his focus locked onto the unmoving gray stone, he emptied his mind of all concepts, words, and worries, attaining absolute mental clarity. His legendary wall-gazing practice demonstrates how simplifying our visual focus leads to the ultimate quiet of our inner spaces."
  },
  {
    id: "mud_lamp",
    title: "The Mud Lamp in the Dark Cave",
    category: "focus",
    source: "Vedic Folklore",
    lesson: "A single tiny steady light clears vast deep darkness.",
    character: "Sadanand",
    content: "A seeker traveled deep inside a massive, pitch-black cavern, feeling frightened by the heavy darkness. His teacher handed him a tiny mud lamp with a single cotton wick. The seeker complained, 'How can this tiny flame fight miles of heavy, dark caverns?' The teacher smiled and lit the wick. Instantly, the pitch-black cave fell back, and the path became beautifully visible. This simple lesson reminds us that we do not need to battle our heavy, dark thoughts; lighting a single, quiet, daily candle of Japa chanting clears the dark mind effortlessly."
  },
  {
    id: "raikva_cart",
    title: "Raikva the Cart-Puller's Fire",
    category: "wisdom",
    source: "Chandogya Upanishad",
    lesson: "Enlightenment is found in quiet, humble simplicity.",
    character: "Raikva",
    content: "A king heard the wind whispering that all the moral energy of the world flowed toward a simple cart-puller named Raikva. The king searched for him and found him sitting beneath a wooden cart, scratching his skin near a small wood fire. Raikva possessed the rare 'Samvarga' (absorbing) wisdom, realizing how all breathing and air return to the single infinite source. He showed that supreme peace and wisdom do not reside in rich gold crown coordinates, but in the quiet, simple hearts of those who live in touch with nature."
  },
  {
    id: "satyakama_herd",
    title: "Satyakama and the Forest Silent Herd",
    category: "mindfulness",
    source: "Chandogya Upanishad",
    lesson: "Truth is learned from silence, wind, and caring.",
    character: "Satyakama Jabala",
    content: "Young Satyakama went to a guru who handed him 400 lean, weak cows and told him, 'Return when they grow to 1000.' Satyakama lived in the silent forest for years, caring for the herd with love. He did not read books or speak. As the herd grew, the quiet forest wind, the blazing fire, the flying swan, and the water birds taught him the four rich quarters of the divine truth. When he returned, his face glowed with such incredible peace that his guru gasped. He proved that quiet, caring work in nature is the highest school of quiet meditation."
  },
  {
    id: "svetaketu_salt",
    title: "Svetaketu and the Salt Water",
    category: "wisdom",
    source: "Chandogya Upanishad",
    lesson: "Understanding the invisible presence that lives in everything.",
    character: "Svetaketu",
    content: "Svetaketu returned from school feeling proud. His father, Uddalaka, handed him a cup of water, asked him to drop a pinch of salt inside, and return the next morning. Morning came, and his father asked him to retrieve the salt. Svetaketu could not find it, as it had dissolved. His father said, 'Taste from the top, taste from the bottom. How is it?' Svetaketu replied, 'It is salty everywhere.' Uddalaka whispered: 'Just like that, the infinite truth is invisible to your eyes, but it completely pervades everything in this life. Tat Tvam Asi—Thou art That.'"
  },
  {
    id: "bharata_deer",
    title: "King Bharata and the Baby Deer",
    category: "focus",
    source: "Bhagavata Purana",
    lesson: "We become that which occupies our final attention.",
    character: "Sage King Bharata",
    content: "King Bharata left his rich throne to meditate in the forest. He became highly advanced, but one afternoon, he spotted a tiny baby deer drowning in the river. He saved it and brought it to his hut. Over time, he became so obsessed with feeding and cuddling the deer that during his final meditation hours, his mind drifted away from the form of peace to the deer's welfare. His story holds a gentle warning: we must keep our highest clean goals clear, preventing small passing attachments from steering our final awareness off course."
  },
  {
    id: "bhringi_saint",
    title: "Bhringi the Three-Legged Sage",
    category: "devotion",
    source: "Shiva Purana",
    lesson: "Single-minded dedication to the primary spirit of life.",
    character: "Sage Bhringi",
    content: "Sage Bhringi was so dedicated to Shiva that he refused to circle Parvati (the feminine manifestation). To force him, Shiva and Parvati merged their bodies into one form (Ardhanarishvara). Bhringi, undeterred, took the form of a small beetle, bored a tiny hole through the middle, and circled only Shiva's side. Parvati, annoyed, withdrew all physical tissues and skin from his frame, leaving him as a bag of white bones. Yet he stood proud. Impressed, Shiva gave him a third leg to support his skeletal frame. His story shows the power of focus that transcends outer comfort."
  },
  {
    id: "kanada_grains",
    title: "Kanada and the Grains of Rice",
    category: "wisdom",
    source: "Vaisheshika Philosophy",
    lesson: "The smallest invisible atom contains the largest truth.",
    character: "Sage Kanada",
    content: "Sage Kanada walked through highways, collecting small discarded grains of rice from the dirt. When scholars asked why a great mind was collecting trash, he replied: 'A single grain of rice may seem worthless, but a collection of fifty grains feeds a hungry person. Each grain is made of tiny, indivisible seeds.' He went on to write the Vaisheshika Sutras, defining the concept of 'Anu' (the atom) centuries before modern science. His life shows that paying deep focus to the smallest daily details reveals the largest truths of the cosmos."
  },
  {
    id: "gorakhnath_jug",
    title: "Gorakhnath and the Water Jar Lock",
    category: "breath",
    source: "Nath Siddha Lore",
    lesson: "Inverting sensory openings to preserve vital life force.",
    character: "Sage Gorakhnath",
    content: "To show his students how to keep life energy from leaking, Gorakhnath collected a clay jar filled with fresh spring water. He showed that if a jar has small cracks or holes, the water slowly drips away, leaving it empty. By closing the holes with clean mud, the jar stores water for months. He taught that our eyes, ears, and tongue are holes through which our daily mental energy leaks out. By practicing daily silence and quiet breathing, we pack the holes, leaving our inner battery filled with focus and strength."
  },
  {
    id: "shankara_outcaste",
    title: "Adi Shankara and the Four Hounds",
    category: "wisdom",
    source: "Adi Shankara Lore",
    lesson: "Realizing the identical source inside all bodies and skins.",
    character: "Adi Shankara",
    content: "Adi Shankara was walking to the Ganges when a poor outcaste carrying four wild hounds crossed his path. Proud of his clean skin, Shankara shouted: 'Move away!' The outcaste looked at him and asked, 'Are you asking my transient physical body of mud to move away, or are you asking the infinite, death-free Soul (Atman) inside me to move away? If the Atman is non-dual, is there any difference between the moon reflected in a holy river or in a dirt puddle?' Shankara fell to his knees in deep respect, realizing his pride had blinded his focus."
  },
  {
    id: "clay_doll",
    title: "The Clay Doll and the Deep Ocean",
    category: "devotion",
    source: "Ramakrishna Parable",
    lesson: "Dry pride melts when we touch the vast ocean of presence.",
    character: "The Clay Doll",
    content: "A tiny doll made of dry, hard clay walked down to the edge of the vast blue ocean. Proud of its shape, it wished to measure the depth of the water and write a big science book about it. Step by step, it walked into the waves. But as soon as its feet touched the water, the dry clay began to soften and dissolve. By the time it took three steps, the doll had completely melted back into the vast blue water, becoming one with the ocean. This beautiful parable depicts how our dry, proud ego dissolves when we truly sit in deep meditation."
  },
  {
    id: "tenali_whisper",
    title: "Tenali Raman and the Silent Well",
    category: "mindfulness",
    source: "South Indian Folklore",
    lesson: "Using quiet awareness of background sounds to outsmart danger.",
    character: "Tenali Raman",
    content: "Tenali Raman heard that thieves were waiting in his dark backyard to steal his valuables. He loudly told his wife that to keep his jewelry safe, he would drop the heavy box inside the deep backyard water well. He filled a wooden box with heavy stones and dragged it, dropping it with a massive SPLASH. The thieves spent the entire cold night bucket-carrying water from the well to retrieve the box. Tenali slept soundly, using their hard work to water his dry banana plants. His story shows how quiet, mindful play of sounds can turn danger into easy work."
  },
  {
    id: "hot_coal",
    title: "The Bodhisattva's Cool Coal Steps",
    category: "focus",
    source: "Buddhist Lore",
    lesson: "Walking through fiery struggles with a cool, loving mind.",
    character: "The Bodhisattva",
    content: "In a difficult lifetime, a group of angry, confused villagers wished to test a saint by placing a path of red-hot glowing coals in his path. The saint did not run or cry out. He took slow, deep, abdominal breaths, centered his mind on the infinite space of compassion, and walked across the glowing coals. It is said that where his feet stepped, the heat cooled instantly, and lotus flowers sprouted. This teaches that when our internal focus is completely packed with love and peace, outer fires cannot burn us."
  },
  {
    id: "narada_books",
    title: "Narada's Heavy Books and Quiet Heart",
    category: "wisdom",
    source: "Chandogya Upanishad",
    lesson: "Vast scholarly knowledge is useless if the heart is anxious.",
    character: "Sage Narada",
    content: "Sage Narada visited the enlightened Sanat Kumara, feeling miserable and anxious. He listed his vast certificates: 'I know the Rigveda, Yajurveda, astronomy, logic, grammar, and fine arts. Yet, I am in sorrow!' Sanat Kumara replied, 'All your books are mere words and names, like laundry lists. They are dry. True peace lies beyond words, in realizing the quiet space of Prana and the infinite.' Narada shut his heavy books, sat on a simple mat, and quieted his brain, proving that real meditation is dropping words to touch silence."
  },
  {
    id: "gargi_debates",
    title: "Gargi and the Spatial Threads",
    category: "wisdom",
    source: "Brihadaranyaka Upanishad",
    lesson: "Sincere concentration unravels the layers of cosmic space.",
    character: "Gargi Vachaknavi",
    content: "In a grand royal debate of advanced sages, a brilliant woman scholar named Gargi stood up to question the chief priest Yajnavalkya. She asked, 'If this earth is woven like thread in water, what is water woven in? What is air woven in?' Layer by layer, she pushed him to define the threads of space, time, and the heavens, showing her highly systematic, razor-sharp focus. Her historical courage proved that deep, meditative inquiry is an open path of truth accessible to everyone who dares to focus their brain."
  },
  {
    id: "prahalad_pillar",
    title: "Prahalada and the Solid Stone Pillar",
    category: "devotion",
    source: "Vishnu Purana",
    lesson: "Infinite, loving protection resides in whichever point we focus.",
    character: "Prahalada",
    content: "Young Prahalada was threatened by his angry father, King Hiranyakashipu, who demanded, 'Where is your lord? Is he inside this cold stone pillar?' The boy, who spent every single breath peacefully chanting the divine name, replied with absolute smile and confidence, 'He is inside me, and he is just as fully present inside this solid stone pillar.' The king struck the pillar in rage, and the divine presence emerged to protect the boy. His tale shows that where devotion is deeply concentrated, a protective force emerges immediately."
  },
  {
    id: "uttanka_spring",
    title: "Uttanka's Desert Hydration Key",
    category: "focus",
    source: "Mahabharata",
    lesson: "Trusting your spiritual sources even when they look simple.",
    character: "Sage Uttanka",
    content: "Sage Uttanka was walking across a searing hot desert, dying of dehydration. He prayed for water, and Vishnu promised to send a helper. A poor hunter wearing dirty rags approached, carrying muddy water in a leather jar and offering it to the sage. Feeling disgusted, Uttanka refused. The hunter disappeared, and Vishnu revealed it was the nectar of peace, testing his ability to look past dry, dirty outer shapes. This story reminds us to keep our focus on the pure water of truth, regardless of the simple format in which it shows up."
  },
  {
    id: "ribhu_nidagha",
    title: "Ribhu and the Royal King's Carriage",
    category: "wisdom",
    source: "Vishnu Purana",
    lesson: "Dropping dual concepts of 'I' and 'you' to see one presence.",
    character: "Sage Ribhu",
    content: "Sage Ribhu visited his student Nidagha, who still believed in class structures. They watched a royal king ride past on a massive elephant. Ribhu asked, 'Who is the king, and who is the elephant?' Nidagha laughed, 'The king is the one sitting on top, the elephant is the one carrying him below!' Ribhu jumped on Nidagha's shoulders and asked, 'Who am I, and who are you?' Nidagha's mind broke open in realization: 'There is no top or bottom, no I or you. Only one space lives in us all.' This parable teaches non-dual focus."
  },
  {
    id: "tukaram_sugarcane",
    title: "Tukaram's Sweet Split Share",
    category: "wisdom",
    source: "Medieval Folklore",
    lesson: "Sharing sweetness even with those who strike you.",
    character: "Sant Tukaram",
    content: "Tukaram worked in a sugarcane field, and the farmer paid him with ten bundles of sweet sugar canes. As he walked home, poor village children gathered around. Tukaram happily handed out nine canes, keeping only a single stick for his family. When he reached home, his angry wife scolded him for his foolishness and struck his back with the stick, splitting the sugarcane into two equal halves. Tukaram smiled: 'Look at the mercy of the creator! Now we have two beautiful pieces to enjoy!' His story teaches us to keep our hearts sweet in all situations."
  },
  {
    id: "mira_nectar",
    title: "Mirabai and the Cup of Poison",
    category: "devotion",
    source: "Medieval Folklore",
    lesson: "Absolute concentration of love turns toxic forces into sweet water.",
    character: "Sant Mirabai",
    content: "An angry local ruler sent Sant Mirabai a cup of deadly poison, claiming it was holy temple water. Knowing his bad intent, Mirabai did not feel panic or rage. She kept her eyes locked onto her divine focus, drank the liquid with a serene, loving smile, and felt no pain. The toxic liquid turned into sweet, harmless nectar in her throat. Her story is a legendary proof of how a heart completely packed with divine concentration can protect our cells from the most toxic physical environments."
  },
  {
    id: "chaitanya_hound",
    title: "Chaitanya and the Rabid Hunter Hound",
    category: "devotion",
    source: "Medieval Folklore",
    lesson: "High peace waves tame wild, aggressive surrounding energies.",
    character: "Sant Chaitanya",
    content: "Chaitanya was walking through a forest, chanting and dancing in absolute ecstasy. A wild, aggressive hunter and his team of rabid, barking hounds rushed past to attack him. Rather than running, Chaitanya opened his arms, chanting sweet peace prayers. Feeling the soft, warm waves of pure loving resonance coming from his body and voice, the hounds stopped barking, dropped their tails, and began to lick his feet with joy, while the hunter fell to his knees in deep calm. This shows how high, quiet vibrations can change violent surroundings."
  },
  {
    id: "jada_silence",
    title: "Jada Bharata's Absolute Quiet Walk",
    category: "mindfulness",
    source: "Bhagavata Purana",
    lesson: "Walking through life completely quiet to preserve inner energy.",
    character: "Jada Bharata",
    content: "Bharata, in his final human birth, resolved to live as 'Jada'—someone who acts completely mute, simple, and listless to prevent people from dragging him into worldly chatter. He did not speak, argue, or seek respect. Even when forced to carry a royal king's carriage, he walked softly, jumping over tiny forest ants to protect them. The king realized that this mute, simple man sitting on the dirt possessed the highest, most spacious peace. His life teaches that quietening our tongues is the ultimate way to store mental force."
  },
  {
    id: "avadhuta_bow",
    title: "The Avadhuta and the Bow-Maker",
    category: "focus",
    source: "Bhagavata Purana",
    lesson: "Achieving absolute convergence of attention on our target.",
    character: "The Avadhuta",
    content: "A wandering sage watched an arrow-smith heating and straightening a metal bow. The smith’s eyes were so completely converged on the edge of the bow that he did not even look up or blink when a massive royal army with horses, loud trumpets, and a king passed right beside his forge. When the sage asked if the king had passed, the smith asked, 'Which king? I didn't see anyone.' This story teaches that when our focus on our daily tasks or our Japa chanting is complete, the entire noisy army of the world fades away."
  },
  {
    id: "vyasa_ganesha_pen",
    title: "Vyas and Ganesha's Unbroken Quill",
    category: "focus",
    source: "Mahabharata",
    lesson: "Maintaining an uninterrupted flow of focus through thick and thin.",
    character: "Sage Vyasa and Lord Ganesha",
    content: "When Sage Vyasa wished to write down the massive Mahabharata, Lord Ganesha agreed to be his scribe, but on one condition: Vyasa must dictate the verses without pausing, and Ganesha would write without stopping his pen. Vyasa agreed, but added that Ganesha must understand the deep meaning of every verse before writing it down. When Ganesha's quill broke under the speed, he snapped off his own ivory tusk, dipped it in ink, and kept writing without a millisecond of pause. This story teaches us to keep our focus flowing, adapting to any disruption immediately."
  }
];
