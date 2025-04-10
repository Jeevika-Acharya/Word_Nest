
import express from 'express';
const app = express()


app.get('/words', (req, res) => {
    let word1 = {
        name: "Diligent",
        meaning:
          "Diligent describes someone who works hard and puts in consistent effort to achieve their goals.",
        synonym: [
          "Hardworking",
          "Industrious",
          "Persistent",
          "Dedicated",
          "Thorough",
        ],
        antonym: ["Lazy", "Careless", "Negligent", "Inattentive", "Irresponsible"],
      };
    
      let word2 = {
        name: "Resilient",
        meaning:
          "Resilient describes someone who can quickly recover from difficulties and adapt to challenges.",
        synonym: ["Strong", "Tough", "Adaptable", "Enduring", "Persistent"],
        antonym: ["Weak", "Fragile", "Vulnerable", "Sensitive", "Unstable"],
      };
    
      let word3 = {
        name: "Meticulous",
        meaning:
          "Meticulous describes someone who pays great attention to detail and works carefully to ensure accuracy.",
        synonym: ["Precise", "Careful", "Thorough", "Detailed", "Exact"],
        antonym: ["Careless", "Sloppy", "Negligent", "Inaccurate", "Hasty"],
      };
    
      let word4 = {
        name: "Empathetic",
        meaning:
          "Empathetic describes someone who understands and shares the feelings of others.",
        synonym: [
          "Compassionate",
          "Understanding",
          "Caring",
          "Sensitive",
          "Sympathetic",
        ],
        antonym: ["Apathetic", "Insensitive", "Unfeeling", "Cold", "Uncaring"],
      };
    
      let word5 = {
        name: "Tenacious",
        meaning:
          "Tenacious describes someone who is determined and does not give up easily.",
        synonym: [
          "Determined",
          "Persistent",
          "Stubborn",
          "Unyielding",
          "Strong-willed",
        ],
        antonym: ["Weak-willed", "Indecisive", "Timid", "Yielding", "Unmotivated"],
      };
    
      let word6 = {
        name: "Innovative",
        meaning:
          "Innovative describes someone who introduces new and creative ideas or methods.",
        synonym: [
          "Creative",
          "Inventive",
          "Original",
          "Resourceful",
          "Groundbreaking",
        ],
        antonym: [
          "Unimaginative",
          "Conventional",
          "Predictable",
          "Traditional",
          "Ordinary",
        ],
      };
    
      let word7 = {
        name: "Altruistic",
        meaning:
          "Altruistic describes someone who is selfless and cares for the well-being of others.",
        synonym: ["Selfless", "Generous", "Compassionate", "Charitable", "Kind"],
        antonym: ["Selfish", "Greedy", "Egotistical", "Unkind", "Insensitive"],
      };
    
      let word8 = {
        name: "Versatile",
        meaning:
          "Versatile describes someone who is adaptable and capable of doing many different things well.",
        synonym: [
          "Adaptable",
          "Flexible",
          "Multitalented",
          "Resourceful",
          "Skillful",
        ],
        antonym: ["Inflexible", "Unadaptable", "Limited", "Rigid", "Narrow-minded"],
      };
    
      let word9 = {
        name: "Pragmatic",
        meaning:
          "Pragmatic describes someone who deals with problems logically and practically.",
        synonym: ["Practical", "Realistic", "Logical", "Sensible", "Rational"],
        antonym: [
          "Idealistic",
          "Impractical",
          "Unrealistic",
          "Emotional",
          "Irrational",
        ],
      };
    
      let word10 = {
        name: "Astute",
        meaning:
          "Astute describes someone who is sharp, clever, and able to assess situations accurately.",
        synonym: ["Shrewd", "Clever", "Sharp", "Perceptive", "Insightful"],
        antonym: ["Foolish", "Naïve", "Slow-witted", "Unperceptive", "Ignorant"],
      };
    
      let word11 = {
        name: "Eloquent",
        meaning:
          "Eloquent describes someone who expresses themselves clearly and persuasively.",
        synonym: [
          "Fluent",
          "Persuasive",
          "Articulate",
          "Expressive",
          "Well-spoken",
        ],
        antonym: [
          "Inarticulate",
          "Unclear",
          "Mumbling",
          "Tongue-tied",
          "Unexpressive",
        ],
      };
    
      let word12 = {
        name: "Candid",
        meaning:
          "Candid describes someone who is honest and straightforward in their speech or behavior.",
        synonym: ["Honest", "Frank", "Direct", "Open", "Sincere"],
        antonym: ["Deceitful", "Dishonest", "Reserved", "Secretive", "Indirect"],
      };
    
      let word13 = {
        name: "Scrupulous",
        meaning:
          "Scrupulous describes someone who is extremely careful and thorough in their work.",
        synonym: ["Meticulous", "Precise", "Diligent", "Thorough", "Conscientious"],
        antonym: ["Careless", "Negligent", "Reckless", "Lax", "Sloppy"],
      };
    
      let word14 = {
        name: "Vigilant",
        meaning:
          "Vigilant describes someone who is watchful and alert to possible dangers.",
        synonym: ["Watchful", "Alert", "Attentive", "Observant", "Cautious"],
        antonym: [
          "Careless",
          "Inattentive",
          "Unobservant",
          "Neglectful",
          "Reckless",
        ],
      };
    
      let word15 = {
        name: "Gregarious",
        meaning:
          "Gregarious describes someone who is social and enjoys the company of others.",
        synonym: [
          "Sociable",
          "Outgoing",
          "Friendly",
          "Extroverted",
          "Companionable",
        ],
        antonym: ["Shy", "Introverted", "Reserved", "Aloof", "Unsociable"],
      };
    
      let word16 = {
        name: "Obstinate",
        meaning:
          "Obstinate describes someone who is stubborn and unwilling to change their opinion.",
        synonym: [
          "Stubborn",
          "Headstrong",
          "Unyielding",
          "Determined",
          "Persistent",
        ],
        antonym: ["Flexible", "Agreeable", "Compliant", "Open-minded", "Yielding"],
      };
    
      let word17 = {
        name: "Jovial",
        meaning: "Jovial describes someone who is cheerful and full of good humor.",
        synonym: ["Cheerful", "Jolly", "Happy", "Lighthearted", "Lively"],
        antonym: ["Gloomy", "Miserable", "Sad", "Depressed", "Sullen"],
      };
    
      let word18 = {
        name: "Magnanimous",
        meaning:
          "Magnanimous describes someone who is generous and forgiving, especially toward a rival.",
        synonym: ["Generous", "Noble", "Forgiving", "Charitable", "Selfless"],
        antonym: ["Petty", "Selfish", "Ungenerous", "Vindictive", "Spiteful"],
      };
    
      let word19 = {
        name: "Ambiguous",
        meaning:
          "Ambiguous describes something that is unclear or has multiple meanings.",
        synonym: ["Unclear", "Vague", "Obscure", "Uncertain", "Indefinite"],
        antonym: ["Clear", "Obvious", "Definite", "Certain", "Explicit"],
      };
    
      let word20 = {
        name: "Pensive",
        meaning:
          "Pensive describes someone who is deep in thought, often in a serious or melancholic way.",
        synonym: [
          "Thoughtful",
          "Reflective",
          "Contemplative",
          "Brooding",
          "Wistful",
        ],
        antonym: ["Carefree", "Unconcerned", "Thoughtless", "Happy", "Shallow"],
      };
      let word21 = {
        name: "Erudite",
        meaning:
          "Erudite describes someone who is highly knowledgeable and well-educated.",
        synonym: ["Scholarly", "Intellectual", "Learned", "Wise", "Knowledgeable"],
        antonym: ["Ignorant", "Uneducated", "Illiterate", "Uninformed", "Naïve"],
      };
    
      let word22 = {
        name: "Pernicious",
        meaning:
          "Pernicious describes something that is harmful, often in a gradual or subtle way.",
        synonym: ["Harmful", "Destructive", "Damaging", "Dangerous", "Toxic"],
        antonym: ["Harmless", "Innocuous", "Benign", "Safe", "Beneficial"],
      };
    
      let word23 = {
        name: "Voracious",
        meaning:
          "Voracious describes someone who has a strong appetite for something, often food or knowledge.",
        synonym: ["Greedy", "Insatiable", "Eager", "Hungry", "Ravenous"],
        antonym: [
          "Satisfied",
          "Indifferent",
          "Apathetic",
          "Full",
          "Unenthusiastic",
        ],
      };
    
      let word24 = {
        name: "Obsequious",
        meaning:
          "Obsequious describes someone who is excessively obedient or overly eager to please.",
        synonym: ["Servile", "Fawning", "Submissive", "Sycophantic", "Groveling"],
        antonym: ["Assertive", "Independent", "Resistant", "Confident", "Defiant"],
      };
    
      let word25 = {
        name: "Melancholy",
        meaning:
          "Melancholy describes a deep and often long-lasting sadness or sorrow.",
        synonym: ["Sad", "Gloomy", "Depressed", "Mournful", "Somber"],
        antonym: ["Joyful", "Cheerful", "Happy", "Optimistic", "Lively"],
      };
    
      let word26 = {
        name: "Loquacious",
        meaning: "Loquacious describes someone who talks a lot, often excessively.",
        synonym: ["Talkative", "Chatty", "Garrulous", "Wordy", "Verbose"],
        antonym: ["Quiet", "Reserved", "Reticent", "Taciturn", "Silent"],
      };
    
      let word27 = {
        name: "Impeccable",
        meaning:
          "Impeccable describes something that is flawless or perfect in quality.",
        synonym: ["Perfect", "Flawless", "Spotless", "Unblemished", "Faultless"],
        antonym: ["Imperfect", "Flawed", "Defective", "Inferior", "Faulty"],
      };
    
      let word28 = {
        name: "Recalcitrant",
        meaning:
          "Recalcitrant describes someone who is stubbornly resistant to authority or control.",
        synonym: [
          "Defiant",
          "Uncooperative",
          "Rebellious",
          "Stubborn",
          "Resistant",
        ],
        antonym: ["Obedient", "Compliant", "Submissive", "Docile", "Agreeable"],
      };
    
      let word29 = {
        name: "Ubiquitous",
        meaning:
          "Ubiquitous describes something that seems to be everywhere at the same time.",
        synonym: [
          "Omnipresent",
          "Ever-present",
          "Universal",
          "Pervasive",
          "Widespread",
        ],
        antonym: ["Rare", "Uncommon", "Scarce", "Absent", "Limited"],
      };
    
      let word30 = {
        name: "Zealous",
        meaning:
          "Zealous describes someone who is extremely enthusiastic and passionate about something.",
        synonym: ["Passionate", "Eager", "Devoted", "Ardent", "Fervent"],
        antonym: [
          "Indifferent",
          "Apathetic",
          "Unenthusiastic",
          "Dispassionate",
          "Lukewarm",
        ],
      };
      let word31 = {
        name: "Inevitable",
        meaning:
          "Inevitable describes something that is certain to happen and cannot be avoided.",
        synonym: ["Unavoidable", "Certain", "Inescapable", "Fated", "Predestined"],
        antonym: ["Avoidable", "Uncertain", "Preventable", "Doubtful", "Optional"],
      };
    
      let word32 = {
        name: "Prolific",
        meaning:
          "Prolific describes someone or something that produces a large amount of something.",
        synonym: ["Productive", "Abundant", "Fertile", "Creative", "Fruitful"],
        antonym: ["Unproductive", "Barren", "Sparse", "Limited", "Infertile"],
      };
    
      let word33 = {
        name: "Cognizant",
        meaning:
          "Cognizant describes someone who is aware of or has knowledge about something.",
        synonym: ["Aware", "Conscious", "Knowledgeable", "Informed", "Perceptive"],
        antonym: ["Unaware", "Ignorant", "Oblivious", "Uninformed", "Clueless"],
      };
    
      let word34 = {
        name: "Ephemeral",
        meaning:
          "Ephemeral describes something that lasts for a very short period of time.",
        synonym: [
          "Temporary",
          "Short-lived",
          "Fleeting",
          "Momentary",
          "Transitory",
        ],
        antonym: ["Permanent", "Enduring", "Lasting", "Eternal", "Timeless"],
      };
    
      let word35 = {
        name: "Scrutinize",
        meaning: "Scrutinize means to examine something very carefully in detail.",
        synonym: ["Examine", "Inspect", "Analyze", "Study", "Investigate"],
        antonym: ["Ignore", "Overlook", "Neglect", "Disregard", "Glance"],
      };
    
      let word36 = {
        name: "Voracious",
        meaning:
          "Voracious describes someone who has a very eager approach to an activity, especially eating or learning.",
        synonym: ["Greedy", "Insatiable", "Hungry", "Eager", "Ravenous"],
        antonym: ["Content", "Satisfied", "Uninterested", "Full", "Apathetic"],
      };
    
      let word37 = {
        name: "Belligerent",
        meaning:
          "Belligerent describes someone who is aggressive, hostile, or ready to fight.",
        synonym: [
          "Aggressive",
          "Hostile",
          "Combative",
          "Antagonistic",
          "Quarrelsome",
        ],
        antonym: ["Peaceful", "Calm", "Friendly", "Nonviolent", "Passive"],
      };
    
      let word38 = {
        name: "Capricious",
        meaning:
          "Capricious describes someone who changes their mind or mood unpredictably.",
        synonym: ["Unpredictable", "Impulsive", "Whimsical", "Erratic", "Fickle"],
        antonym: ["Consistent", "Predictable", "Stable", "Reliable", "Steady"],
      };
    
      let word39 = {
        name: "Oblivious",
        meaning:
          "Oblivious describes someone who is unaware of what is happening around them.",
        synonym: ["Unaware", "Ignorant", "Clueless", "Unmindful", "Unconscious"],
        antonym: ["Aware", "Conscious", "Cognizant", "Mindful", "Attentive"],
      };
    
      let word40 = {
        name: "Superfluous",
        meaning:
          "Superfluous describes something unnecessary or more than what is needed.",
        synonym: [
          "Unnecessary",
          "Excessive",
          "Redundant",
          "Extravagant",
          "Surplus",
        ],
        antonym: ["Necessary", "Essential", "Required", "Important", "Minimal"],
      };
      let word41 = {
        name: "Juxtapose",
        meaning: "Juxtapose means to place two things side by side for comparison.",
        synonym: ["Compare", "Contrast", "Align", "Pair", "Position"],
        antonym: ["Separate", "Isolate", "Divide", "Unrelated", "Scatter"],
      };
    
      let word42 = {
        name: "Meticulous",
        meaning: "Meticulous describes someone who pays great attention to detail.",
        synonym: ["Precise", "Careful", "Thorough", "Detailed", "Diligent"],
        antonym: ["Careless", "Sloppy", "Negligent", "Hasty", "Imprecise"],
      };
    
      let word43 = {
        name: "Ambiguous",
        meaning:
          "Ambiguous describes something that has multiple meanings or is unclear.",
        synonym: ["Unclear", "Vague", "Obscure", "Equivocal", "Indefinite"],
        antonym: ["Clear", "Definite", "Obvious", "Explicit", "Unambiguous"],
      };
    
      let word44 = {
        name: "Ostentatious",
        meaning:
          "Ostentatious describes someone or something that is flashy or showy to attract attention.",
        synonym: ["Showy", "Flashy", "Extravagant", "Pretentious", "Gaudy"],
        antonym: ["Modest", "Humble", "Simple", "Unpretentious", "Plain"],
      };
    
      let word45 = {
        name: "Resilient",
        meaning:
          "Resilient describes someone who is able to recover quickly from difficulties.",
        synonym: ["Tough", "Strong", "Adaptable", "Hardy", "Enduring"],
        antonym: ["Fragile", "Weak", "Vulnerable", "Delicate", "Sensitive"],
      };
    
      let word46 = {
        name: "Insipid",
        meaning:
          "Insipid describes something that lacks flavor, excitement, or interest.",
        synonym: ["Boring", "Dull", "Lifeless", "Uninteresting", "Tasteless"],
        antonym: ["Exciting", "Interesting", "Flavorful", "Stimulating", "Lively"],
      };
    
      let word47 = {
        name: "Convoluted",
        meaning:
          "Convoluted describes something that is complex and difficult to understand.",
        synonym: ["Complicated", "Intricate", "Confusing", "Twisted", "Elaborate"],
        antonym: ["Simple", "Clear", "Straightforward", "Easy", "Plain"],
      };
    
      let word48 = {
        name: "Taciturn",
        meaning:
          "Taciturn describes someone who is reserved or speaks very little.",
        synonym: ["Quiet", "Reserved", "Silent", "Reticent", "Introverted"],
        antonym: ["Talkative", "Chatty", "Loquacious", "Expressive", "Garrulous"],
      };
    
      let word49 = {
        name: "Impetuous",
        meaning: "Impetuous describes someone who acts quickly without thinking.",
        synonym: ["Rash", "Reckless", "Impulsive", "Hasty", "Unthinking"],
        antonym: ["Cautious", "Careful", "Thoughtful", "Deliberate", "Prudent"],
      };
    
      let word50 = {
        name: "Utopian",
        meaning:
          "Utopian describes an ideal or perfect society that is often unrealistic.",
        synonym: ["Idealistic", "Perfect", "Paradisiacal", "Dreamlike", "Heavenly"],
        antonym: ["Realistic", "Dystopian", "Flawed", "Imperfect", "Practical"],
      };
    
      let words = [
        word1,
        word2,
        word3,
        word4,
        word5,
        word6,
        word7,
        word8,
        word9,
        word10,
        word11,
        word12,
        word13,
        word14,
        word15,
        word16,
        word17,
        word18,
        word19,
        word20,
        word21,
        word22,
        word23,
        word24,
        word25,
        word26,
        word27,
        word28,
        word29,
        word30,
        word31,
        word32,
        word33,
        word34,
        word35,
        word36,
        word37,
        word38,
        word39,
        word40,
        word41,
        word42,
        word43,
        word44,
        word45,
        word46,
        word47,
        word48,
        word49,
        word50,
      ];
  res.send(words)
})


app.listen(3000, () => {
  console.log(`Example app listening on port `)
})