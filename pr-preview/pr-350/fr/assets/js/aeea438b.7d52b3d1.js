"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[189],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,m=h["".concat(u,".").concat(p)]||h[p]||c[p]||s;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const s={sidebar_label:"Keeper"},i="Keeper Functions",a={unversionedId:"developers/wordle-keeper",id:"developers/wordle-keeper",title:"Keeper Functions",description:"Now it\u2019s time to implement the Keeper functions for each",source:"@site/docs/developers/wordle-keeper.md",sourceDirName:"developers",slug:"/developers/wordle-keeper",permalink:"/pr-preview/pr-350/fr/developers/wordle-keeper",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-keeper.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keeper"},sidebar:"developers",previous:{title:"Types",permalink:"/pr-preview/pr-350/fr/developers/wordle-types"},next:{title:"Run The Wordle Chain",permalink:"/pr-preview/pr-350/fr/developers/run-wordle"}},u={},l=[{value:"SubmitWordle Function",id:"submitwordle-function",level:2},{value:"SubmitGuess Function",id:"submitguess-function",level:2},{value:"Protobuf File",id:"protobuf-file",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keeper-functions"},"Keeper Functions"),(0,o.kt)("p",null,"Now it\u2019s time to implement the Keeper functions for each\nmessage. From the Cosmos-SDK docs, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/building-modules/keeper.html"},"Keeper"),"\nis defined as the following:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The main core of a Cosmos SDK module is a piece called the keeper.\nThe keeper handles interactions with the store, has references\nto other keepers for cross-module interactions, and contains most\nof the core functionality of a module.")),(0,o.kt)("p",null,"Keeper is an abstraction on Cosmos that allows us\nto interact with the Key-Value store and change the state\nof the blockchain."),(0,o.kt)("p",null,"Here, it will help us outline the logic for each message we create."),(0,o.kt)("h2",{id:"submitwordle-function"},"SubmitWordle Function"),(0,o.kt)("p",null,"We first start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitWordle")," function."),(0,o.kt)("p",null,"Open up the following file: ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wordle/keeper/msg_server_submit_wordle.go")),(0,o.kt)("p",null,"Inside the following, add the following code, which we will go over in a bit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package keeper\n\nimport (\n  "context"\n  "crypto/sha256"\n  "encoding/hex"\n  "github.com/YazzyYaz/wordle/x/wordle/types"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"\n  "time"\n  "unicode"\n)\n\nfunc (k msgServer) SubmitWordle(goCtx context.Context, msg *types.MsgSubmitWordle) (*types.MsgSubmitWordleResponse, error) {\n  ctx := sdk.UnwrapSDKContext(goCtx)\n  // Check to See the Wordle is 5 letters\n  if len(msg.Word) != 5 {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle Must Be A 5 Letter Word")\n  }\n  // Check to See Only Alphabets Are Passed for the Wordle\n  if !(IsLetter(msg.Word)) {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle Must Only Consist Of Letters In The Alphabet")\n  }\n\n  // Use Current Day to Create The Index of the Newly-Submitted Wordle of the Day\n  currentTime := time.Now().Local()\n  var currentTimeBytes = []byte(currentTime.Format("2006-01-02"))\n  var currentTimeHash = sha256.Sum256(currentTimeBytes)\n  var currentTimeHashString = hex.EncodeToString(currentTimeHash[:])\n  // Hash The Newly-Submitted Wordle of the Day\n  var submittedSolutionHash = sha256.Sum256([]byte(msg.Word))\n  var submittedSolutionHashString = hex.EncodeToString(submittedSolutionHash[:])\n\n  var wordle = types.Wordle{\n    Index:     currentTimeHashString,\n    Word:      submittedSolutionHashString,\n    Submitter: msg.Creator,\n  }\n\n  // Try to Get Wordle From KV Store Using Current Day as Key\n  // This Helps ensure only one Wordle is submitted per day\n  _, isFound := k.GetWordle(ctx, currentTimeHashString)\n  if isFound {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle of the Day is Already Submitted")\n  }\n  // Write Wordle to KV Store\n  k.SetWordle(ctx, wordle)\n  return &types.MsgSubmitWordleResponse{}, nil\n}\n\nfunc IsLetter(s string) bool {\n  for _, r := range s {\n    if !unicode.IsLetter(r) {\n      return false\n    }\n  }\n  return true\n}\n')),(0,o.kt)("p",null,"Here in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitWordle")," Keeper function, we are doing a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We first ensure that a word submitted for Wordle of the Day is\n5 letters long and only uses alphabets. That means no integers can\nbe submitted in the string."),(0,o.kt)("li",{parentName:"ul"},"We then create a hash from the current day the moment the Wordle was\nsubmitted. We set this hash to the index of the Wordle type. This\nallows us to look up any guesses for this Wordle for subsequent\nguesses, which we will go over next."),(0,o.kt)("li",{parentName:"ul"},"We then check if the index for today\u2019s date is currently empty or\nnot. If it\u2019s not empty, this means a Wordle has already been\nsubmitted. Remember, only one wordle can be submitted per\nday. Everyone else has to guess the submitted wordle."),(0,o.kt)("li",{parentName:"ul"},"We also have a helper function in there to check if a string only\ncontains alphabet characters.")),(0,o.kt)("h2",{id:"submitguess-function"},"SubmitGuess Function"),(0,o.kt)("p",null,"The next Keeper function we will add is the following:\n",(0,o.kt)("inlineCode",{parentName:"p"},"x/wordle/keeper/msg_server_submit_guess.go")),(0,o.kt)("p",null,"Open that file and add the following code, which we will explain in a bit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package keeper\n\nimport (\n  "context"\n  "crypto/sha256"\n  "encoding/hex"\n  "github.com/YazzyYaz/wordle/x/wordle/types"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"\n  "strconv"\n  "time"\n  "github.com/tendermint/tendermint/crypto"\n)\n\nfunc (k msgServer) SubmitGuess(goCtx context.Context, msg *types.MsgSubmitGuess) (*types.MsgSubmitGuessResponse, error) {\n  ctx := sdk.UnwrapSDKContext(goCtx)\n  // Check Word is 5 Characters Long\n  if len(msg.Word) != 5 {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Guess Must Be A 5 Letter Word!")\n  }\n \n  // Check String Contains Alphabet Letters Only\n  if !(IsLetter(msg.Word)) {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Guess Must Only Consist of Alphabet Letters!")\n  }\n\n  // Get Current Day to Pull Up Wordle of That Day As A Hash\n  currentTime := time.Now().Local()\n  var currentTimeBytes = []byte(currentTime.Format("2006-01-02"))\n  var currentTimeHash = sha256.Sum256(currentTimeBytes)\n  var currentTimeHashString = hex.EncodeToString(currentTimeHash[:])\n  wordle, isFound := k.GetWordle(ctx, currentTimeHashString)\n  if !isFound {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle of The Day Hasn\'t Been Submitted Yet. Feel Free to Submit One!")\n  }\n\n  // We Convert Current Day and Guesser to A Hash To Use As An Index For Today\'s Guesses For That Guesser\n  // That Way, A Person Can Guess 6 Times A Day For Each New Wordle Created\n  var currentTimeGuesserBytes = []byte(currentTime.Format("2006-01-02") + msg.Creator)\n  var currentTimeGuesserHash = sha256.Sum256(currentTimeGuesserBytes)\n  var currentTimeGuesserHashString = hex.EncodeToString(currentTimeGuesserHash[:])\n  // Hash The Guess To The Wordle\n  var submittedSolutionHash = sha256.Sum256([]byte(msg.Word))\n  var submittedSolutionHashString = hex.EncodeToString(submittedSolutionHash[:])\n\n  // Get the Latest Guess entry for this Submitter for the current Wordle of the Day\n  var count int\n  guess, isFound := k.GetGuess(ctx, currentTimeGuesserHashString)\n  if isFound {\n    // Check if Submitter Reached 6 Tries\n    if guess.Count == strconv.Itoa(6) {\n      return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You Have Guessed The Maximum Amount of Times for The Day! Try Again Tomorrow With A New Wordle.")\n    }\n    currentCount, err := strconv.Atoi(guess.Count)\n    if err != nil {\n      panic(err)\n    }\n    count = currentCount\n  } else {\n    // Initialize Count Value If No Entry Exists for this Submitter for Today\'s Wordle\n    count = 0\n  }\n  // Increment Guess Count\n  count += 1\n  var newGuess = types.Guess{\n    Index:     currentTimeGuesserHashString,\n    Submitter: msg.Creator,\n    Word:      submittedSolutionHashString,\n    Count:     strconv.Itoa(count),\n  }\n  // Remove Current Guess Entry to be Updated With New Entry\n  k.RemoveGuess(ctx, currentTimeGuesserHashString)\n  // Add New Guess Entry\n  k.SetGuess(ctx, newGuess)\n  // Setup Reward \n  reward := sdk.Coins{sdk.NewInt64Coin("WORDLE", 100)}\n  if !(wordle.Word == submittedSolutionHashString) {\n    return &types.MsgSubmitGuessResponse{Title: "Wrong Answer", Body: "Your Guess Was Wrong. Try Again"}, nil\n  } else {\n    // If Submitter Guesses Correctly\n    guesserAddress, _ := sdk.AccAddressFromBech32(msg.Creator)\n    moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))\n    // Send Reward\n    k.bankKeeper.SendCoins(ctx, guesserAddress, moduleAcct, reward) \n    return &types.MsgSubmitGuessResponse{Title: "Correct", Body: "You Guessed The Wordle Correctly!"}, nil\n  }\n}\n')),(0,o.kt)("p",null,"In the above code, we are doing the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here, we are doing initial checks again on the word to ensure\nit\u2019s 5 characters and only alphabet characters are used, which\ncan be refactored in the future or checked within the CLI commands."),(0,o.kt)("li",{parentName:"ul"},"We then get the Wordle of the Day by getting the hash string of\nthe current day."),(0,o.kt)("li",{parentName:"ul"},"Next we create a hash string of current day and the Submitter.\nThis allows us to create a Guess type with an index that uses the\ncurrent day and the address of the submitter. This helps us when we\nface a new day and an address wants to guess the new wordle of the day.\nThe index setup ensures they can continue guessing a new wordle\nevery day up to the max of 6 tries per day."),(0,o.kt)("li",{parentName:"ul"},"We then check if that Guess type for the Submitter for today\u2019s\nwordle did reach 6 counts. If it hasn\u2019t, we increment the count.\nWe then check if the guess is correct. We store the Guess type with\nthe updated count to the state.")),(0,o.kt)("h2",{id:"protobuf-file"},"Protobuf File"),(0,o.kt)("p",null,"  A few files need to be modified for this to work."),(0,o.kt)("p",null,"The first is ",(0,o.kt)("inlineCode",{parentName:"p"},"proto/wordle/tx.proto"),"."),(0,o.kt)("p",null,"Inside this file, fill in the empty ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSubmitGuessResponse"),"\nwith the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message MsgSubmitGuessResponse {\n  string title = 1;\n  string body = 2;\n}\n")),(0,o.kt)("p",null,"Next file is ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wordle/types/expected_keepers.go")),(0,o.kt)("p",null,"Here, we need to add the SendCoins method to the BankKeeper\ninterface in order to allow sending the reward to the right guesser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type BankKeeper interface {\n  SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error\n}\n")),(0,o.kt)("p",null,"With that, we implemented all our Keeper functions! Time to\ncompile the blockchain and take it out for a test drive."))}c.isMDXComponent=!0}}]);