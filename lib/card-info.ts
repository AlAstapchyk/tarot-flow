interface CardInfo {
  id: string;
  name: string;
  uprightMean: string;
  reversedMean: string;
  uprightKeywords: string;
  reversedKeywords: string;
  poem: string;
  questions: string;
  questionsReversed: string;
}

export const cardInfos: CardInfo[] = [
  {
    id: "0",
    name: "The Fool",
    uprightMean:
      "The Fool urges stepping outside comfort zones and embracing change with open arms. It signals a new phase filled with possibilities. Encourages following the heart with courage and enthusiasm. Highlights living in the moment with childlike wonder. Reminds that growth often comes from taking risks.",
    reversedMean:
      "When reversed, The Fool reflects hesitation or being stuck at new beginnings, lacking faith or hope. Suggests risky behavior threatening relationships or ventures. Warns to proceed cautiously financially/career-wise. Advises regaining confidence and exploring spiritual paths carefully.",
    uprightKeywords: "innocence, beginnings, spontaneity, free spirit",
    reversedKeywords: "recklessness, hesitation, foolishness, holding back ",
    poem: "get ready, set\n& leap with faith, into the unknown. Dare to fly.",
    questions:
      "1. What new journey or opportunity am I being invited to embrace with faith today?\n2. How can I cultivate a sense of trust and openness to the unknown in my current situation?\n3. In what ways can I allow myself to experience life with childlike curiosity and enthusiasm right now?",
    questionsReversed:
      "1. What fears or doubts are holding me back from taking the leap into new experiences?\n2. Where might I be acting recklessly or without sufficient thought in my life currently?\n3. How can I gently rebuild my confidence to move forward on my spiritual path despite uncertainty?",
  },
  {
    id: "1",
    name: "The Magician",
    uprightMean:
      "The Magician calls for embracing capabilities and taking inspired action. Signifies a ripe time for transformation and turning ideas into reality. Reminds that clear intention enables anything. Conveys resourcefulness and power to change circumstance. Links heaven and earth urging harmony of belief and action.",
    reversedMean:
      "When reversed, The Magician signals self-confidence struggles and unfocused energy. Warns against deceptive use of abilities. Indicates lost opportunities due to poor planning/distractions. May suggest mental distress or overwhelming external forces. Advises regaining clarity and aligning intentions positively.",
    uprightKeywords: "action, manifestation, power, resourcefulness",
    reversedKeywords:
      "manipulation, poor planning, untapped potential, trickery ",
    poem: "Creative forces lie within. Have trust &  move forward.",
    questions:
      "1. How can I harness the creative power within me to manifest my desires?\n2. What talents or skills am I being called to trust and act upon today?\n3. In what ways can I align my intentions with inspired action to bring positive change?",
    questionsReversed:
      "1. Where might I be feeling disempowered or disconnected from my true potential?\n2. How can I avoid manipulation—of myself or others—in my current situation?\n3. What distractions must I clear away to regain focus and clarity in my actions?",
  },
  {
    id: "2",
    name: "The High Priestess",
    uprightMean:
      "The High Priestess calls to embrace spirituality and hidden knowledge. Highlights balancing conscious thought and intuition. Signals access to psychic clarity and sacred wisdom. Suggests quiet contemplation and awareness of subtle energies. Encourages listening to the inner voice beyond distractions.",
    reversedMean:
      "When reversed, The High Priestess reveals suppressed instincts and self-doubt. Cautions against ignoring feelings and being swayed by others. Suggests emotional repression, confusion, or fertility issues. Advises reconnecting with inner wisdom and trusting own truths.",
    uprightKeywords: "intuition, mystery, wisdom, subconscious",
    reversedKeywords: "secrets, disconnected, silence, withdrawal ",
    poem: "Eyes closed. Listening within. The unseen begins",
    questions:
      "1. What messages is my intuition trying to convey to me at this moment?\n2. How can I embrace stillness to access deeper wisdom within?\n3. In what areas of my life do I need greater patience and trust in the unseen?",
    questionsReversed:
      "1. Where am I ignoring my inner voice or dismissing my gut feelings?\n2. How can I reconnect with my authentic self beyond external influences?\n3. What hidden truths or emotions need to be acknowledged and healed?",
  },
  {
    id: "3",
    name: "The Empress",
    uprightMean:
      "The Empress encourages embracing creativity and nurturing in all forms. It signifies fruitful outcomes and emotional warmth. Represents the natural cycles, life, and the womb of creation. Invites deep connection with nature and senses. Highlights abundance and care for oneself and others.",
    reversedMean:
      "When reversed, The Empress reveals delayed growth or creative stagnation. Signals disconnection from nurturing energies or self-care neglect. May indicate emotional repression or infertility concerns. Warns of unhealthy attachments or overprotection. Advises rebalancing self-love and external care.",
    uprightKeywords: "abundance, nurturing, creativity, fertility",
    reversedKeywords: "creative block, dependence, neglect, lack ",
    poem: "A womb soft and wild. She guides with knowing hands",
    questions:
      "1. How can I nurture creativity and growth in my life right now?\n2. What aspects of myself or others need compassion and loving care?\n3. In what ways can I reconnect with the natural world to restore balance?",
    questionsReversed:
      "1. Where am I experiencing creative blocks or neglecting self-care?\n2. How might overprotection or dependence be limiting growth?\n3. What steps can I take to cultivate abundance and emotional nourishment?",
  },
  {
    id: "4",
    name: "The Emperor",
    uprightMean:
      "The Emperor calls forth confidence in leadership and assertiveness. Represents building solid foundations and rules. Encourages taking control with wisdom and fairness. Emphasizes security, reliability, and long-term planning. Highlights masculine energy and governance.",
    reversedMean:
      "When reversed, The Emperor reflects misuse or loss of authority. May show tyrannical control or chaotic leadership. Indicates stubbornness or inability to adapt. Warns against power struggles or irresponsibility. Advises regaining balance through wisdom and humility.",
    uprightKeywords: "authority, structure, control, discipline",
    reversedKeywords:
      "domination, excessive control, inflexibility, passivity ",
    poem: "A pillar Strong & steady. Guiding with  calm & clarity.",
    questions:
      "1. How can I embody strength and stability in my current challenges?\n2. What structures or boundaries do I need to establish for safety and growth?\n3. In what ways can I lead with clarity, discipline, and fairness?",
    questionsReversed:
      "1. Where might I be exerting control in unhealthy or rigid ways?\n2. How can I release stubbornness to invite greater flexibility and balance?\n3. What areas of my life lack order or leadership that I can address?",
  },
  {
    id: "5",
    name: "The Hierophant",
    uprightMean:
      "The Hierophant suggests seeking mentorship or spiritual counsel. Highlights importance of structure in faith or morals. Encourages commitment to rituals and collective identity. May point to schooling or organized knowledge. Promotes learning shared wisdom and cultural norms.",
    reversedMean:
      "When reversed, The Hierophant challenges orthodox beliefs and societal expectations. Indicates questioning traditions or authority. May reveal spiritual disillusionment or breaking from conformity. Warns against false teachings or deception. Encourages forging authentic personal belief systems.",
    uprightKeywords: "tradition, conformity, wisdom, spiritual guidance",
    reversedKeywords: "non-conformity, rebellion, personal beliefs, dogma ",
    poem: "Tradition &  Knowledge held in his hands. The depths of Wisdom to be shared in time.",
    questions:
      "1. What traditional wisdom or teachings can support me on my journey?\n2. How can I deepen my connection to spiritual community or mentorship?\n3. In what ways can following a structured path bring clarity and purpose?",
    questionsReversed:
      "1. Where am I resisting conventions or questioning long-held beliefs?\n2. How can I embrace personal authenticity beyond societal expectations?\n3. What false teachings or dogmas might I need to release?",
  },
  {
    id: "6",
    name: "The Lovers",
    uprightMean:
      "The Lovers call for sincere connection and mutual respect. Highlights meaningful relationships and emotional growth. Encourages conscious decision-making grounded in love. Represents union not just romantic but of ideals and purpose. Invites embracing vulnerability and trust.",
    reversedMean:
      "When reversed, The Lovers reveal relationship struggles or indecision. Indicates temptation or unfaithfulness. Highlights emotional disconnection or miscommunication. Warns against impulsive relationship decisions. Advises honest reflection to realign values and love.",
    uprightKeywords: "partnership, love, harmony, choices",
    reversedKeywords: "imbalance, disharmony, misalignment, temptation ",
    poem: "Love. The source of life connecting us to oneness.",
    questions:
      "1. How can I cultivate harmony and authenticity in my relationships?\n2. What important choices am I facing that require alignment of heart and mind?\n3. In what ways can vulnerability deepen my connections with others?",
    questionsReversed:
      "1. Where do I notice imbalance or misalignment in my relationships?\n2. What fears or doubts hinder my ability to fully open my heart?\n3. How can I realign with my core values to foster true partnership?",
  },
  {
    id: "7",
    name: "The Chariot",
    uprightMean:
      "The Chariot calls for confidence, discipline, and perseverance. Highlights mastery over challenges and external pressures. Encourages staying centered and assertive. Represents a journey or breakthrough. Promotes self-control and ambition aligned with purpose.",
    reversedMean:
      "When reversed, The Chariot reveals scattered energies or losing control. Indicates frustration and delays. Warns against stubbornness or coercion. Suggests failure to achieve goals due to imbalance. Advises recalibrating focus and reining in impulses.",
    uprightKeywords: "determination, willpower, control, victory",
    reversedKeywords: "lack of direction, opposition, aggression, turbulence ",
    poem: "A wagon driven by a steadfast determined & clearminded force.",
    questions:
      "1. How can I harness my willpower to overcome current obstacles?\n2. What conflicting forces in my life can I bring into harmony?\n3. In what areas do I need to remain confident and disciplined to succeed?",
    questionsReversed:
      "1. Where am I feeling directionless or overwhelmed by opposing energies?\n2. How can I avoid reckless behavior and regain control?\n3. What adjustments must I make to restore momentum and focus?",
  },
  {
    id: "8",
    name: "Strength",
    uprightMean:
      "Strength encourages compassion combined with bravery. Highlights fortitude in adversity and taming inner beasts. Promotes gentle control and perseverance. Suggests harnessing emotions constructively. Invites embracing vulnerability as power.",
    reversedMean:
      "When reversed, Strength reveals insecurity or lack of confidence. Suggests giving into fears or temper tantrums. Warns of recklessness or suppressed emotions. Can signify abuse of power or self-destructive tendencies. Advises regaining calm and self-trust.",
    uprightKeywords: "strength, courage, compassion, resilience",
    reversedKeywords: "self-doubt, weakness, raw emotion, force ",
    poem: ".-Simha- The lion. Trusting The inner strength Only roaring once.",
    questions:
      "1. How can I access my inner courage to face challenges gently yet firmly?\n2. What fears or doubts can I transform through patience and compassion?\n3. In what ways can vulnerability become a source of strength?",
    questionsReversed:
      "1. Where am I struggling with self-doubt or allowing fear to control me?\n2. How can I reclaim calmness and self-trust in difficult situations?\n3. What impulses or negative emotions need healing and balance?",
  },
  {
    id: "9",
    name: "The Hermit",
    uprightMean:
      "The Hermit signals a time for contemplation and self-discovery. Highlights patience and purposeful isolation. Encourages seeking mentors or bringing light to dark situations. Suggests spiritual growth through solitude. Invites a pause to evaluate life paths.",
    reversedMean:
      "When reversed, The Hermit warns against excessive isolation or avoiding needed connection. Can indicate fear of facing inner truths. Suggests feeling directionless or avoiding responsibilities. Warns of depression or loneliness. Advises seeking balance between solitude and social support.",
    uprightKeywords: "introspection, soul-searching, solitude, wisdom",
    reversedKeywords: "isolation, loneliness, withdrawal, avoidance ",
    poem: "Hybernation mode on. Finding wisdom  & comfort from within  the inner light",
    questions:
      "1. What insights might come through solitude and silent reflection?\n2. How can I better listen to the wisdom of my inner light?\n3. In what areas do I need to slow down and seek deeper understanding?",
    questionsReversed:
      "1. Where am I isolating myself excessively or avoiding connection?\n2. How can I find balance between solitude and support?\n3. What truths am I resisting that could guide my growth?",
  },
  {
    id: "10",
    name: "Wheel of Fortune",
    uprightMean:
      "The Wheel of Fortune marks inevitable change and life’s cyclical nature. Encourages riding the waves of fortune with equanimity. Highlights karma and cause-effect relationships. Suggests opportunities from unexpected shifts. Invites embracing transformation with openness.",
    reversedMean:
      "When reversed, Wheel of Fortune reveals stubbornness or inability to accept change. Indicates misfortune or delays. Suggests repeating mistakes or cycles. Warns of feeling powerless against fate. Advises cultivating adaptability and letting go of control.",
    uprightKeywords: "destiny, cycles, karma, change",
    reversedKeywords: "bad luck, resistance, delay, stuck ",
    poem: "Life keeps on turning. Moments passing. Opportunities arising",
    questions:
      "1. How can I embrace the natural cycles and changes in my life?\n2. What opportunities are arising that I may not yet see clearly?\n3. In what ways can I cultivate trust in the flow of destiny?",
    questionsReversed:
      "1. Where am I resisting change or holding on too tightly to the past?\n2. How can I release fear of uncertainty to welcome transformation?\n3. What patterns am I repeating that prevent forward movement?",
  },
  {
    id: "11",
    name: "Justice",
    uprightMean:
      "Justice calls for ethical action and responsibility for one’s choices. Highlights cause and effect and the importance of truth. Encourages fairness in judgments and resolution. Signals clarity through objective reasoning. Promotes balance and equilibrium in all areas of life.",
    reversedMean:
      "When reversed, Justice exposes corruption or avoidance of responsibility. Warns of unfair outcomes or incomplete information. Indicates ignoring consequences or self-deception. Suggests necessity to face truth honestly. Calls for moral realignment and acceptance of fairness.",
    uprightKeywords: "fairness, balance, truth, law",
    reversedKeywords: "dishonesty, unfairness, bias, imbalance ",
    poem: "Justice reigns when balance remains. With honesty & truth comes the source of proof.",
    questions:
      "1. How can I bring greater fairness and balance to my decisions and actions?\n2. What truths do I need to face with honesty and clarity?\n3. In what ways can I take full responsibility for the consequences I create?",
    questionsReversed:
      "1. Where might bias or dishonesty be clouding my judgment?\n2. How can I realign with integrity and moral accountability?\n3. What unfair situations require me to seek resolution or forgiveness?",
  },
  {
    id: "12",
    name: "The Hanged Man",
    uprightMean:
      "The Hanged Man signals a time for reflection and seeing things differently. Highlights voluntary sacrifice and deep spiritual growth. Encourages acceptance of delayed progress and forgiveness. Suggests transformation through altered consciousness. Invites embracing paradox and the unknown.",
    reversedMean:
      "When reversed, The Hanged Man reveals unwillingness to loosen control or adapt. Warns of frustration, stagnation, or avoidance of necessary sacrifice. Suggests holding on to limiting beliefs or behaviors. Calls for release and opening to new viewpoints for progress.",
    uprightKeywords: "surrender, release, new perspective, pause",
    reversedKeywords: "stalling, delays, resistance, indecision ",
    poem: "Up side Down. Hanging still against all will. Surrender takes hold as the world unfolds.",
    questions:
      "1. What perspectives might I gain by surrendering control and embracing patience?\n2. How can letting go open space for new understanding and growth?\n3. In what ways can I embrace paradox and uncertainty in my life?",
    questionsReversed:
      "1. Where am I resisting necessary surrender or change?\n2. How can I release stubbornness to move forward with grace?\n3. What sacrifices am I avoiding that could lead to transformation?",
  },
  {
    id: "13",
    name: "Death",
    uprightMean:
      "Death calls for embracing inevitable change and shedding outdated identities. Highlights spiritual evolution through loss and renewal. Suggests natural transitions rather than literal death. Invites release of emotional baggage and fears. Promotes growth and fresh starts as part of life’s flow.",
    reversedMean:
      "When reversed, Death shows reluctance to move on or accept transformation. Can indicate denial or fear causing stagnation. Suggests holding onto painful or unnecessary situations. Warns of inability to embrace growth cycles. Encourages courage to face endings for renewal and freedom.",
    uprightKeywords: "transformation, endings, change, transition",
    reversedKeywords: "stagnation, resistance, fear, clinging ",
    poem: "An ending. A loss. A heavy depth unfolding. Awaiting a new beginning…",
    questions:
      "1. What endings in my life am I being invited to accept and release?\n2. How can I welcome the space created for renewal and new beginnings?\n3. In what ways can transformation deepen my spiritual evolution?",
    questionsReversed:
      "1. Where am I clinging to what no longer serves me?\n2. How can I find the courage to embrace change fully?\n3. What fears about loss or transition need to be healed?",
  },
  {
    id: "14",
    name: "Temperance",
    uprightMean:
      "Temperance calls for blending diverse energies with grace and equilibrium. Encourages thoughtful compromise and healing. Highlights spiritual balance and purposeful timing. Suggests finding middle ground and avoiding extremes. Promotes inner peace through self-control and understanding.",
    reversedMean:
      "When reversed, Temperance indicates disharmony or unable to moderate emotions or actions. Suggests impulsivity or extreme behaviors. Warns of burnout or conflicts arising from imbalance. Encourages practicing patience and finding serenity within chaos. Advises restoring equilibrium to achieve healing and growth.",
    uprightKeywords: "moderation, balance, patience, harmony",
    reversedKeywords: "excess, imbalance, self-healing, discord ",
    poem: "Softly move, not too much, not too little. Remembering to balance & be  with trust.",
    questions:
      "1. How can I cultivate balance and harmony amidst life’s contradictions?\n2. What practices support my patience and measured response to challenges?\n3. In what ways can I foster healing through integration and cooperation?",
    questionsReversed:
      "1. Where is imbalance or excess causing discord in my life?\n2. How can I practice greater self-restraint and moderation?\n3. What conflicts do I need to resolve to restore inner peace?",
  },
  {
    id: "15",
    name: "The Devil",
    uprightMean:
      "The Devil exposes chains of addiction and material control. Highlights shadow aspects and confronting fears. Encourages breaking free from dependencies. Suggests awareness of temptation and deceptive allure. Invites reclaiming personal power from bondage.",
    reversedMean:
      "When reversed, The Devil reveals emerging freedom from toxic patterns or relationships. Encourages shedding illusions and reclaiming autonomy. Suggests overcoming fears and distorted attachments. Warns relapse is possible without vigilance. Highlights growth through inner strength and conscious choice.",
    uprightKeywords: "attachment, addiction, materialism, restriction",
    reversedKeywords: "detachment, liberation, freedom, reclaiming power ",
    poem: "Shackles binding to the shadows  within. Break free of your demons & learn to fly.",
    questions:
      "1. What attachments or fears am I ready to confront and release?\n2. How can awareness help me break free from limiting patterns?\n3. In what ways might I reclaim personal power from shadows within?",
    questionsReversed:
      "1. How am I beginning to find freedom from unhealthy bonds?\n2. What inner demons am I courageously facing to heal?\n3. How can I maintain vigilance to avoid falling back into old traps?",
  },
  {
    id: "16",
    name: "The Tower",
    uprightMean:
      "The Tower signals unexpected change and spiritual breakthrough. Highlights collapse of illusions and forced transformation. Encourages embracing crisis as opportunity for growth. Suggests dismantling limiting paradigms. Warns of discomfort but ultimate liberation.",
    reversedMean:
      "When reversed, The Tower reveals fear of change leading to stagnation. Suggests denial of uncomfortable truths or delayed disaster. Warns of internal turmoil or crises kept hidden. Indicates resistance blocking growth. Calls for courage to face destruction for renewal and awakening.",
    uprightKeywords: "upheaval, chaos, revelation, awakening",
    reversedKeywords: "fear of change, avoidance, disaster, delay ",
    poem: "Upheaval forces friction resulting in movement. Suddenly everything changes.",
    questions:
      "1. What false foundations in my life need to be dismantled?\n2. How can I embrace upheaval as a catalyst for growth?\n3. In what ways might sudden change hold unexpected liberation?",
    questionsReversed:
      "1. Where am I resisting necessary, albeit uncomfortable, transformations?\n2. How can I prepare myself to face and learn from crises?\n3. What hidden disruptions might I be denying or suppressing?",
  },
  {
    id: "17",
    name: "The Star",
    uprightMean:
      "The Star offers calm and restorative energy after turmoil. Highlights connection to divine guidance and dreams. Encourages openness to inspiration and creativity. Suggests peace and rejuvenation. Invites optimism and benevolence.",
    reversedMean:
      "When reversed, The Star reveals lost faith or inability to find guidance. Suggests inner turmoil or confusion preventing clarity. Warns against hopelessness or cynicism. Indicates renewal may be delayed but is possible. Encourages seeking comfort and restoring belief in self and universe.",
    uprightKeywords: "hope, faith, inspiration, spirituality",
    reversedKeywords: "despair, disconnection, lack of faith, discouragement ",
    poem: "Brightly shining guiding  the way in the  darkness of  the unknown. Trust & you will be lead.",
    questions:
      "1. How can I nurture hope and remain inspired through challenges?\n2. What spiritual guidance is inviting me to trust the future?\n3. In what ways can openness to creativity and renewal sustain me?",
    questionsReversed:
      "1. Where am I struggling to find faith or optimism?\n2. How can I reconnect with sources of healing and inspiration?\n3. What emotional blockages need attention for renewed clarity?",
  },
  {
    id: "18",
    name: "The Moon",
    uprightMean:
      "The Moon highlights illusions, fears, and psychic awareness. Encourages facing emotional shadows and subconscious patterns. Suggests a journey through uncertainty toward clarity. Invites attentiveness to dreams and inner voice. Emphasizes cycles and transformation.",
    reversedMean:
      "When reversed, The Moon reveals emerging clarity after confusion or emotional turmoil. Suggests uncovering hidden deceptions or releasing fears. Warns of lingering illusions or denial. Encourages trusting inner guidance despite uncertainty. Advises ongoing exploration of subconscious for healing and understanding.",
    uprightKeywords: "intuition, illusion, subconscious, fear",
    reversedKeywords: "confusion, release, insecurity, clarity ",
    poem: "Reflecting back by mirroring within. Sometimes the darkness is where we need to be.",
    questions:
      "1. What unconscious fears or illusions am I ready to explore?\n2. How can trusting intuition illuminate my path through uncertainty?\n3. In what ways do dreams and subconscious messages guide me?",
    questionsReversed:
      "1. What confusion or deception am I beginning to see more clearly?\n2. How might I release fears that blur my inner vision?\n3. What truths, previously hidden, are emerging for healing?",
  },
  {
    id: "19",
    name: "The Sun",
    uprightMean:
      "The Sun brings clarity, fulfillment, and renewed energy. Highlights achievement and happiness. Promotes growth and self-expression. Encourages embracing life’s pleasures and childlike enthusiasm. Suggests a bright outlook and harmony.",
    reversedMean:
      "When reversed, The Sun reveals a clouded outlook or personal dissatisfaction. Indicates temporary obstacles or hesitation to shine. Warns against ignoring positive aspects. Suggests nurturing self-love and joy despite challenges. Encourages reconnecting with happiness and clarity.",
    uprightKeywords: "positivity, vitality, success, joy",
    reversedKeywords: "sadness, pessimism, delayed success, gloom ",
    poem: "Shine bright. Follow your light. Radiating from within & expressing without.",
    questions:
      "1. How can I embrace joy and vitality in my daily life?\n2. What aspects of myself shine most brightly when I express them freely?\n3. In what ways can gratitude deepen my experience of fulfillment?",
    questionsReversed:
      "1. Where might pessimism or setbacks cloud my inner light?\n2. How can I nurture self-love and optimism despite obstacles?\n3. What can I do to reconnect with the playful, radiant parts of myself?",
  },
  {
    id: "20",
    name: "Judgment",
    uprightMean:
      "Judgment calls for honest reflection and embracing changes after revelations. Highlights liberation from old guilt or mistakes. Promotes new beginnings and spiritual renewal. Encourages listening to inner calling and rising above past limitations. Suggests transformation through conscious choice.",
    reversedMean:
      "When reversed, Judgment reveals resistance to change or avoidance of self-examination. Indicates fear or guilt blocking progress. Warns against ignoring lessons or opportunities for growth. Suggests a need to confront truth to move forward. Encourages embracing responsibility and spiritual insight.",
    uprightKeywords: "rebirth, self-evaluation, absolution, awakening",
    reversedKeywords: "self-doubt, denial, stagnation, avoidance ",
    poem: "Rise above. Hear the call. No wrong no right. Awaken. Stand tall.",
    questions:
      "1. What personal truths am I being called to acknowledge and integrate?\n2. How can forgiveness and acceptance support my spiritual awakening?\n3. In what ways might I rise above past limitations to transform?",
    questionsReversed:
      "1. Where am I avoiding honest self-reflection or accountability?\n2. How can I courageously face consequences to foster growth?\n3. What fears prevent me from embracing change and rebirth?",
  },
  {
    id: "21",
    name: "The World",
    uprightMean:
      "The World signals fulfillment and accomplishment after hard work. Highlights balance, unity, and cosmic connection. Encourages appreciating personal growth and life’s interconnectedness. Suggests readiness for new adventures and expanded horizons. Invites gratitude and sharing success with others.",
    reversedMean:
      "When reversed, The World reveals frustration from lack of progress or endings. Suggests feeling disconnected or incomplete. Warns against fear of change or reluctance to move forward. Indicates need to resolve unfinished matters and embrace new chapters. Encourages patience and openness for success and growth.",
    uprightKeywords: "completion, achievement, fulfillment, integration",
    reversedKeywords: "lack of closure, incompletion, delays, stuck ",
    poem: "A circle whole, a journey complete. All is one, returning home within.",
    questions:
      "1. How can I celebrate my accomplishments and integration of life experiences?\n2. What new journeys are opening as I complete this cycle?\n3. In what ways do I feel connected to the unity and wholeness of existence?",
    questionsReversed:
      "1. Where am I feeling stuck or incomplete in my personal growth?\n2. How can I release resistance to transitions and embrace new beginnings?\n3. What unfinished matters require my attention to move forward fully?",
  },
];
