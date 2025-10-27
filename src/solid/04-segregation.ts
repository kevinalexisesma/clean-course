interface Bird{    
    eat(): void;    
}

interface FlyingBird extends Bird{
    fly(): number;
}

interface runningBird extends Bird{
    run(): void;
}

interface SwimmingBird extends Bird{
    swim(): void;
}

class Tucan implements Bird, FlyingBird{
    fly(): number { return 100;}
    eat(): void {}        
}

class Hummingbird implements Bird, FlyingBird{
    fly(): number { return 200;}
    eat(): void {}        
}

class Ostrich implements Bird, runningBird{    
    eat(): void {}
    run(): void {}    
}

class Penguin implements Bird, SwimmingBird{    
    eat(): void {}    
    swim(): void {}
}