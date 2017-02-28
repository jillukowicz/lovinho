-- Configuration
function love.conf(t)
    t.title = "Scrolling Shooter Tutorial" -- The title of the window the love is in (string)
    t.version = "0.10.2"         -- The LÖVE version this love was made for (string)
    t.window.width = 480        -- we want our love to be long and thin.
    t.window.height = 800

    -- For Windows debugging
    t.console = true
end